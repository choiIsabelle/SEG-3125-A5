import Papa from 'papaparse';

export async function fetchCensusData() {
    const url = 'https://api.census.gov/data/2023/acs/acs1/profile?get=group(DP03)&ucgid=0100000US';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchCensusData();

export async function fetchLaborData() {
    const filePath = './LaborStats.csv';
    return fetch(filePath)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then((csvText) => {
            const parsed = Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
            });
            console.log(parsed.data); // Log the parsed data here
            return parsed.data;
        })
        .catch((error) => console.error('Error loading or parsing CSV:', error));
}