import {useNavigate} from 'react-router-dom'
import Boton from '../../Components/Atoms/Buttonn'


export default function LandingPage() {
    const navigate = useNavigate(); 
  return (
    <div className='landingCont'>
     <h1>Bienvenido a tu Dashboard</h1>
     <h2>¿Que informacion necesitas?</h2>
     <div className='lndgBotCont'> 
       <Boton name={'Informacion de usuarios'} classname={'infoBot'}handleClick= {()=> navigate('/userDash')}/>
       <Boton name={'Informacion de Productos'} classname={'infoBot'} handleClick={()=> navigate('/productDash')} />
     </div>
    </div>
  )
}
