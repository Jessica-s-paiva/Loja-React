import React from 'react';
import S from './Header.module.css';
import Botao from '../Botao/Botao';
const Header = (titulo) => {
  return (
    <header>
        <h4>{titulo}</h4>
    </header>
  )
}

export default Header