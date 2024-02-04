import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Rides from './pages/SearchPage'
import OfferSeat from './pages/OfferSeat'
import Footer from './components/Footer'
import RideDetail from './pages/RideDetail'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Rides />} />
      <Route path="/offer-seat" element={<OfferSeat />} />
      <Route path="/ride/:rideId" element={<RideDetail />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
