import { useEffect, useState } from "react"
import { useOrders } from "../../../utils/fetch/useOrders"
import Item from "../Item";


export default function Orders() {


 const { orders, loading } = useOrders();

 console.log(orders)
 
    return (
       <div>
        {orders.map(order => (
            <div key={order.id}>
              <p>ID: {order.id}</p>
              <p>Status: {order.status}</p>
              {order.orderP?.map((orderP)=>{
                <Item id={orderP.id} name={orderP.name}/>
              })}
              <p>User: {order.userOrder.name}</p>
              


            </div>
  ))}
  </div>)
}
