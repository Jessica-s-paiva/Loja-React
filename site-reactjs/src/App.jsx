import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cadastro from './Pages/Cadastro/Cadastro';
import Header from './Components/Header/Header';
import DeleteUser from './Pages/DeleteUser/DeleteUser';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter >
      {/* Estatico */}
      <Header titulo='Loja'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/DeleteUser' element={<DeleteUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
