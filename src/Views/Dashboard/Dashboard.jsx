  import { useState, useEffect } from 'react';
  import './Dashboard.css'
  import axios from 'axios';
  import DeleteU from '../../Features/UserFeatures/DeleteU/DeleteU';
import Texto from '../../Components/Atoms/Texto';
import Boton from '../../Components/Atoms/Buttonn.jsx'; 
import Item from '../../Components/Molecule/Item.jsx';
 function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    
    
    
    const fetchUsers = async function(){
      const response = await axios.get('http://localhost:3000/users/api/users');
    
      const usersData = response.data; 
      setUsers(usersData);
    }
    const fetchProducts = async function(){
      const response = await axios.get('http://localhost:3000/products/api');
     
      const productsData = response.data; 
      setProducts(productsData);
    }
    useEffect(() => {
      fetchProducts(),
    fetchUsers()
    }, []);

    return (
      
      <div className="container"> 
      <h1>Panel de Administrador.</h1>
      <div className='listados'>
      <div className="item-cont">       
        <h2>Usuarios</h2>
          {users.map(user => (
            <Item key={user?.id}
              name={user.name}/>
          ))}
        <Boton name={"Crear Usuario"} classname={"crearB"}/>   
           </div>
     
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

  export default AdminDashboard;
