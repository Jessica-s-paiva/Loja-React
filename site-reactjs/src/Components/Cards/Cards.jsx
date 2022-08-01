import React from 'react';
import S from './Cards.module.css';

const Cards = ({produto}) => {
  return (
    <section className={S.container}>
        <picture className={S.contentFoto}>
            <img src={produto.image} className={S.foto} />
        </picture>
        <h4>{produto.name}</h4>
        <p>{produto.cor}</p>
        <p>{produto.marca}</p> 
        <p>{produto.peso}</p>
        <p>{produto.tamanho}</p>
        <p>{produto.valor}</p>
    </section>
  )
}

export default Cards