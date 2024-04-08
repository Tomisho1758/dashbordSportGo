import { useState } from 'react'
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import './App.css'
import ProductDashboard from './Views/Dashboard/Dashboard.jsx'
import UserDashboard from './Views/UserDashboard/UserDashboard.jsx';
import LandingPage from './Views/LandingPage/LandingPage.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

    <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/productDash' element={<ProductDashboard/>}/> 
    <Route path='/userDash' element={<UserDashboard/>}/> 
    
    

</Routes>
 </Router> )
}

export default App
