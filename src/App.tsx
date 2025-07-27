import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Public from './pages/Public'


function App() {

 return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Public />} />
    </Routes>
  </BrowserRouter>
 )
}

export default App

