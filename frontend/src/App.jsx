import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Singup from './pages/Singup';
import Login from './pages/Login';


function App() {

  return (
    <BrowserRouter>
         <Routes>
            <Route path='/signup' element={<Singup />} />
            <Route path='/' element={<Login />} />
         </Routes>
    </BrowserRouter>
  )
}

export default App
