
import Texto from "../Atoms/Texto"
import Boton from "../Atoms/Buttonn"
import "./item.css"

export default function Item({id, name, }) {
  
 
  return (
    <div
    key={id}
    className="contenedor"
    >
        <Texto texto={name}/>

        <div className="btn-cont">
         <Boton name={"Editar"} classname={"listButton"} />
             <Boton name={"Borrar"} classname={"listButton"}/>  
             <br></br> 
        </div>
              
    </div>
  )
}
