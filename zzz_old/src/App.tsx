import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/App.scss'
import Header from './layout/Header'
import Page from './layout/Page'
import Footer from './layout/Footer'
import Home from './pages/Home'
import AddProduct from './pages/AddProduct'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Page />}>
            <Route index element={<Home />}/>
            <Route path="add-product" element={<AddProduct />}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
