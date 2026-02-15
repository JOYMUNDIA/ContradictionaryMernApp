import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import FoodProfileCard from './components/ProfileCards/FoodProfileCard'
import DrugProfileCard from './components/ProfileCards/DrugProfileCard'

import { grapefruitMock } from './mockData/foodMockData'
import { warfarinMock } from './mockData/drugMockData'


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
