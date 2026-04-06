import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FoodCategoryPage from "./pages/FoodCategoryPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food/:category" element={<FoodCategoryPage />} />

        {/* future routes */}
        {/* <Route path="/results" element={<Results />} /> */}
        {/* <Route path="/about" element={<About />} /> */}

        <Route path="*" element={<div>404 – Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
