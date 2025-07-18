import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
`

const InfoContainer = styled.div`
display: flex;
gap: 1rem;
`


const GraphInfoContainer = styled.div`
    gap: 0;
    flex-direction: column;
`


const Title = styled.h2`
    font-size: 24px;
`

const SubTitle = styled.h3`
    font-size: 18px;  
    font-style: ${(props) => (props.isItalic ? 'italic' : 'normal')};    
`
const TitleContainer = styled.div`
`

const GraphContainer = ({ tPrefix }) => {
    const { t } = useTranslation();
  
    return (
      <GraphInfoContainer>
        <TitleContainer>
          <SubTitle>{t(`${tPrefix}.graphType`)}</SubTitle>
          <SubTitle isItalic={true}>{t(`${tPrefix}.title`)}</SubTitle>
        </TitleContainer>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>•</span>
            <p>{t(`${tPrefix}.description`)}</p>
          </li>
        </ul>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>•</span>
            <a href={tPrefix.includes('line') 
                       ? "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410001701"
                       : "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510001401"
            } 
            target="_blank" rel="noopener noreferrer">
              {t(`${tPrefix}.linkTitle`)}
            </a>
          </li>
        </ul>
      </GraphInfoContainer>
    );
  };

const DashboardInfos = () => {
    const { t } = useTranslation();
  
    return (
      <Container>
        <Title>{t('dashboard.graph_info.title')}</Title>
        <InfoContainer>
          <GraphContainer tPrefix="dashboard.graph_info.line" />
          <GraphContainer tPrefix="dashboard.graph_info.bar" />
        </InfoContainer>
      </Container>
    );
  };

  export default DashboardInfos;
  