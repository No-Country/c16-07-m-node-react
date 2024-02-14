import './App.css'
import Navbar from './components/Navbar'
import Button from './components/ui/button'
import { BrowserRouter, Route, BrowserRouter as Router, Routes, Switch } from 'react-router-dom'
import Home from '../pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home/>}  />
        </Routes>
      </Navbar>
    </BrowserRouter>
  )
}

export default App
