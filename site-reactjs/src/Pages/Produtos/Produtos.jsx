import React,{ useState, useEffect } from 'react';
import S from './Produtos.module.css';
import Cards from '../../Components/Cards/Cards';
const Produtos = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    handleGetProducts();
  }, []);

  async function handleGetProducts() {
    const url = `http://localhost:3000/produtos`;
    const requisition = await fetch(url);
    const json = await requisition.json();
    setProducts(json);
    console.log(json);
  }

  return (
    <section className={S.sectionCards}>
      {
        !!products && products.map((product, index)=>{
        return (<Cards produto={product} key={index}/>)
        })
      }
    </section>
  )
}

export default Produtos