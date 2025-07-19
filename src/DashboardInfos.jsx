import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  background-color: #f3f3f3;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 0 auto;
  max-width: 800px;
  margin-top: 20px;
`;

const GraphInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const SubTitle = styled.h3`
  font-size: 18px;
  font-style: ${(props) => (props.isItalic ? "italic" : "normal")};
  color: #555;
`;

const TitleContainer = styled.div`
  margin-bottom: 10px;
`;

const StyledLink = styled.a`
  color: #ff4500;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: #e63900;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin-bottom: 10px;

  span {
    margin-right: 8px;
    color:rgb(0, 0, 0);
    font-weight: bold;
  }

  p {
    margin: 0;
    color: #444;
  }
`;

const GraphContainer = ({ tPrefix }) => {
  const { t } = useTranslation();

  return (
    <GraphInfoContainer>
      <TitleContainer>
        <SubTitle>{t(`${tPrefix}.graphType`)}</SubTitle>
        <SubTitle isItalic={true}>{t(`${tPrefix}.title`)}</SubTitle>
      </TitleContainer>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <ListItem>
          <span>•</span>
          <p>{t(`${tPrefix}.description`)}</p>
        </ListItem>
      </ul>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <ListItem>
          <span>•</span>
          <StyledLink
            href={
              tPrefix.includes("line")
                ? "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410001701"
                : "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3510001401"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(`${tPrefix}.linkTitle`)}
          </StyledLink>
        </ListItem>
      </ul>
    </GraphInfoContainer>
  );
};

const DashboardInfos = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("dashboard.graph_info.title")}</Title>
      <InfoContainer>
        <GraphContainer tPrefix="dashboard.graph_info.line" />
        <GraphContainer tPrefix="dashboard.graph_info.bar" />
      </InfoContainer>
    </Container>
  );
};

export default DashboardInfos;