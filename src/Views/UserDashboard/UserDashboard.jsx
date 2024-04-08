import {React, useState, useEffect} from 'react'
import Boton from '../../Components/Atoms/Buttonn';
import Item from '../../Components/Molecule/Item';
import axios from 'axios';
import './UserDashboard';
import Orders from '../../Components/Molecule/orders/orders';

export default function UserDashboard() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async function(){
        const response = await axios.get('http://localhost:3000/users/api/users');
      
        const usersData = response.data; 
        setUsers(usersData);
      }
      useEffect(() => {
        
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
       
        <Orders/>
        </div>
      </div>
      );
    }
  
    
  
