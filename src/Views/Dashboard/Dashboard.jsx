  import { useState, useEffect } from 'react';
  import './Dashboard.css'
  import axios from 'axios'; 
import Boton from '../../Components/Atoms/Buttonn.jsx'; 
import Item from '../../Components/Molecule/Item.jsx';
 function ProductDashboard() {
    
    const [products, setProducts] = useState([]);
    
    
  
    const fetchProducts = async function(){
      const response = await axios.get('http://localhost:3000/products/api');
     
      const productsData = response.data; 
      setProducts(productsData);
    }
    useEffect(() => {
      fetchProducts()
   
    }, []);

    return (
      
      <div className="container"> 
      <h1>Panel de Administrador.</h1>
      <div className='listados'>
          
      <div className="item-cont"> 
        <h2>Productos</h2>
        {products.map(products => (
            <Item key={products?.id}
              name={products.name}/>
          ))}
        <Boton name={"Crear Producto"} classname={"crearB"}/>
        </div>
      </div>
    </div>
    );
  }

  export default ProductDashboard;
