import React,{ useState, useEffect } from 'react';
import S from './Produtos.module.css';
import Cards from '../../Components/Cards/Cards';
const Produtos = () => {
  const [products, setProducts] = useState([]);
  const [idProduct, setIdProduct] = useState('');


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

  async function handleGetProductsById() {
    const url = `http://localhost:3000/produtos/${idProduct}`;
    const requisition = await fetch(url);
    const json = await requisition.json();
    setIdProduct(json);
    console.log(json);
  }
  
  function handleGetId(){
    
  }

  return (
    <>
      <section className={S.sectionCards}>
        {
          !!products && products.map((product, index)=>{
          return (<Cards produto={product} key={index}/>)
          })
        }
        <input type="text" />
        <button onClick={handleGetProductsById}>Buscar produto por ID</button>
      </section>
      <section>
        {/* <Cards produto={produto.name}/> */}
      </section>
    </>
  )
}

export default Produtos