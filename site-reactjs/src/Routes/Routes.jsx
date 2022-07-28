import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Home from '../src/Pages/Home/Home';
import Cadastro from '../src/Pages/Cadastro/Cadastro';
import DeleteUser from '../Pages/DeleteUser/DeleteUser';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component = { Home }  path="/" exact /> 
      <Route component = { Cadastro }  path="/cadastro" />
      <Route component = { DeleteUser }  path="/DeleteUser" />

    </BrowserRouter>
  )
}

export default Routes