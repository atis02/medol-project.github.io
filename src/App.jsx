import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar'
// import Products from './Pages/Products/Products'
// import Services from './Pages/Services/Services'
import Feedback from './Pages/Feedback/Feedback'
import Footer from './Components/Footer'
import AllProducts from './Pages/Products/AllProducts'
import LabDiagnostic from './Pages/Products/LaboratoryDiagnostic/LabDiagnostic'
import Product from './Pages/Products/LaboratoryDiagnostic/Product'
import OneProductItem from './Pages/Products/LaboratoryDiagnostic/OneProductItem'
import AllServiceAssignments from './Pages/Services/AllServiceAssignments'
import AllNews from './Pages/News&Bonus/AllNews'
import NewsItem from './Pages/News&Bonus/NewsItem'
import AboutCompany from './Pages/About/AboutCompany'
import Footer2 from './Components/Footer2'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutCompany />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/products/:id' element={<LabDiagnostic />} />
          <Route path='/products/:id/:name' element={<Product />} />
          <Route path='/products/:id/:name/:item' element={<OneProductItem />} />
          <Route path='/services' element={<AllServiceAssignments />} />
          <Route path='/news' element={<AllNews />} />
          <Route path='/news/:id' element={<NewsItem />} />
          <Route path='/feedback' element={<Feedback />} />
        </Routes>
        <Footer />
        {/* <Footer2 /> */}
      </Router>
    </>
  )
}

export default App
