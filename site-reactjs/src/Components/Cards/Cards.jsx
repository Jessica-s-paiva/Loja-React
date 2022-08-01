import React from 'react';
import S from './Cards.module.css';

const Cards = ({produto}) => {
  return (
    <section className={S.container}>
        <picture className={S.contentFoto}>
            <img src={produto.image} className={S.foto} />
        </picture>
        <h4>{produto.name}</h4>

    </section>
  )
}

export default Cards