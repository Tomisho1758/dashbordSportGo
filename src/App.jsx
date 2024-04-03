import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminDashboard from './Views/Dashboard/Dashboard.jsx'
import NotAllow from './Views/NotAllow/NotAllow.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
      <AdminDashboard/> 
      <NotAllow/>
    </>
  )
}

export default App
