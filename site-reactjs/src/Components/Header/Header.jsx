import React, { StrictMode } from 'react';
import S from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({titulo}) => {
  return (
    <header className={S.container}>
        <h4>{titulo}</h4>
        <nav>
          <Link className={S.link} to='/'>Home</Link>
          <Link className={S.link} to='/cadastro'>Cadastro</Link>
          <Link className={S.link} to='/Clientes'>Clientes</Link>
        </nav>
    </header>
  )
}

export default Header