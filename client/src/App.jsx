import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import OfferSeat from './pages/OfferSeat'
import Footer from './components/Footer'
import SearchPage from './pages/SearchPage'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/offer-seat" element={<OfferSeat />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
