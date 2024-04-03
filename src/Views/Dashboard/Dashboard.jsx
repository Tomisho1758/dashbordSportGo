  import { useState, useEffect } from 'react';
  import './Dashboard.css'
  import axios from 'axios';

  function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    
    
    const loadProducts = async () => {
     
      const productsData = [
        { id: 1, name: 'Producto 1' },
        { id: 2, name: 'Producto 2' },
        { id: 3, name: 'Producto 3' }
      ];
      setProducts(productsData);
    };

    useEffect(() => {
      const fetchUsers = async function(){
      const response = await axios.get('http://localhost:3000/users/api/users');
      console.log(response)
      const usersData = response.data; 
      setUsers(usersData);
    }
    fetchUsers()
    }, []);

    return (
      
      <div className="container"> {/* Agrega la clase container para aplicar estilos */}
      <h1>Panel de Administrador.</h1>
      <div className='listados'>
      <div className="users"> {/* Agrega la clase users para aplicar estilos */}
      
        <h2>Usuarios</h2>
        <ul>
          {users.map(user => (
            <li key={user?.id}>
              {user?.name}
              <button className='listButton'>Editar</button>
              <button className='listButton' >Eliminar</button>
              
            </li>
          ))}
        </ul>
        <button className='crearB'>Crear Usuario</button>
      </div>
      
      <div className="products"> {/* Agrega la clase products para aplicar estilos */}
        <h2>Productos</h2>
        <ul>
          {products.map(product => (
            <li key={product?.id}>
              {product?.name}
              <button className='listButton'>Editar</button>
              <button className='listButton'>Eliminar</button>
            </li>
          ))}
        </ul>
        <button className='crearB'>Crear Producto</button>
        </div>
      </div>
    </div>
    );
  }

  export default AdminDashboard;
