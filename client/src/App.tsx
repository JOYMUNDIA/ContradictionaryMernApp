import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* future routes */}
        {/* <Route path="/results" element={<Results />} /> */}
        {/* <Route path="/about" element={<About />} /> */}

        <Route path="*" element={<div>404 – Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
