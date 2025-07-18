import React from 'react'
import styled from 'styled-components'
import LineGraph from './LineGraph'
import BarGraph from './BarGraph'
import { fetchCensusData } from './Routes'
    
const StyledChartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
`
const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    color: black;
  `


const Dashboard = () => {
  fetchCensusData();
  return (
    <div>
      <Title></Title>
        <StyledChartContainer>
            <LineGraph/>
            <BarGraph/>
        </StyledChartContainer>
        
    </div>
  )
}

export default Dashboard