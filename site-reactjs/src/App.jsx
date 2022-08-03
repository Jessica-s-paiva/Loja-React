import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cadastro from './Pages/Cadastro/Cadastro';
import Header from './Components/Header/Header';
import NovoCliente from './Pages/NovoCliente/NovoCliente';
import TabelaClientes from './Components/TabelaClientes/TabelaClientes';
import EditarCliente from './Pages/EditarCliente/EditarCliente';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter >
      {/* Estatico */}
      <Header titulo='Loja'/>  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cadastro' element={<Cadastro />} />  
        <Route path='/Clientes' element={<TabelaClientes />} />
        <Route path='/NovoCliente' element={<NovoCliente/>}/>
        <Route path='/EditarCliente/:id' component={EditarCliente} element={<EditarCliente/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
