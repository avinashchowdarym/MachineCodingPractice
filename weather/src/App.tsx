import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Layout from './components/Layout'
import { ThemeProvider } from './components/theme-provider'
import WeatherDashboard from './pages/weather-dashboard'
import Cites from './pages/cites'

function App() {

  return (
    <BrowserRouter>
    <ThemeProvider defaultTheme='dark' >
      <Layout>
        <Routes>
          <Route path='/' element={<WeatherDashboard/>}/>
          <Route path='/city/:cityName' element={<Cites/>}/>
        </Routes>
      </Layout>
    </ThemeProvider>
      
    </BrowserRouter>
    
  )
}

export default App
