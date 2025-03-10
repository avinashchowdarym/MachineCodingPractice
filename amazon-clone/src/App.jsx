import { BrowserRouter, Route } from 'react-router'
import icon from '../src/assets/icon.png'
import './App.css'
import HomePage from './components/HomePage'
import { Routes } from 'react-router'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      {/* Navbar here because it should be at all routes */}
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
