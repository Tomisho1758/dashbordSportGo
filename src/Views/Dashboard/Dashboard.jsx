  import { useState, useEffect } from 'react';
  import './Dashboard.css'
  import axios from 'axios'; 
import Boton from '../../Components/Atoms/Buttonn.jsx'; 
import Item from '../../Components/Molecule/Item.jsx';
import { useCategories } from '../../utils/fetch/useCategories.jsx';
import {useNavigate} from "react-router-dom"

 function ProductDashboard() {
    const {category, loading} = useCategories()
    const [products, setProducts] = useState([]);
    
    const navigate= useNavigate()
  
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

      <Boton name={"Usuarios"} classname={"listButton"} handleClick={()=>{navigate("/userDash")}}/>
              <div className='listados'>

      <div className="item-cont" >
        <h2>Categorias  ({category?.length})</h2>
        {category.map(categoria => (
          <Item  key={categoria.id} id={categoria?.id} name={categoria.name}/>
        ))}
      </div>

      <div className="item-cont"> 
        <h2>Productos  ({products?.length})</h2>
        {products.map(products => (
            <Item key={products.id}
            id={products?.id}
              name={products.name}/>
          ))}
        <Boton name={"Crear Producto"} classname={"crearB"}/>



        </div>
      </div>
    </div>
    );
  }

  export default ProductDashboard;
