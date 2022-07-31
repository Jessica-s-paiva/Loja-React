import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cadastro from './Pages/Cadastro/Cadastro';
import Header from './Components/Header/Header';
import Produtos from './Pages/Produtos/Produtos';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter >
      {/* Estatico */}
      <Header titulo='Loja'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/produtos' element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
