import React from 'react'
import styled from 'styled-components'
import LineGraph from './LineGraph'
import BarGraph from './BarGraph'

const StyledDashboard = styled.div`
  background-color:#f3f3f3;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 1200px;
`

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #333333;
  margin-bottom: 2rem;
`

const Dashboard = () => {
  return (
    <StyledDashboard>
      <StyledChartContainer>
        <LineGraph />
        <BarGraph />
      </StyledChartContainer>
    </StyledDashboard>
  )
}

export default Dashboard