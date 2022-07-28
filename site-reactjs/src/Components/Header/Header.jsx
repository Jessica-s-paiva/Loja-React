import React, { StrictMode } from 'react';
import S from './Header.module.css';

const Header = ({titulo}) => {
  return (
    <header className={S.container}>
        <h4>{titulo}</h4>
        <nav>
          
        </nav>
    </header>
  )
}

export default Header