import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import RideSharing from './pages/RideSharing'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ride-sharing" element={<RideSharing />} />
    </Routes>
    </>
  )
}

export default App
