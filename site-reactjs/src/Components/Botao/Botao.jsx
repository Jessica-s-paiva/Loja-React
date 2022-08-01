import React from 'react';
import S from './Botao.module.css';

const Botao = ({text}) => {
  return (
    <button type='text' className={S.btn}>{text}</button>
  )
}

export default Botao