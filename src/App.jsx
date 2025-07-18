import './App.css'
import Dashboard from './Dashboard'
import DashboardInfos from './DashboardInfos'
import Navbar from './NavBar'

function App() {

  return (
    <>
      <div className="App">
        <Navbar/>
        <DashboardInfos/>
        <Dashboard/>
      </div>
    </>
  )
}

export default App
