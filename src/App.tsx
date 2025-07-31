import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Public from './pages/Public'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'


function App() {

 return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Public />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={ 
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>} />
    </Routes>
  </BrowserRouter>
 )
}

export default App

