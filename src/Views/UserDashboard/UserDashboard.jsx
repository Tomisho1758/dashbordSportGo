import {React, useState, useEffect} from 'react'
import Boton from '../../Components/Atoms/Buttonn';
import Item from '../../Components/Molecule/Item';
import axios from 'axios';
import './UserDashboard';
import Orders from '../../Components/Molecule/orders/orders';
import {useNavigate} from "react-router-dom"



export default function UserDashboard() {
    const [users, setUsers] = useState([]);
    const navigate= useNavigate()
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
        <a className={"listButton"} href="http://localhost:3000/">Volver a SportGo</a>

        <Boton name={"Productos"} classname={"listButton"} handleClick={()=>{navigate("/productDash")}}/>
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
        <h3>Ordenes de compra</h3>
        <Orders />
        </div>
        </div>
      </div>
      );
    }
  
    
  
