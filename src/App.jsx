import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom'
import HeaderNav from './components/HeaderNav/HeaderNav'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="app">
      <div className="container">
        <Router>
          <HeaderNav />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/*" element={<div>PAGE NOT FOUND</div>} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App