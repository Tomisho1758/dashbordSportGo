import { useEffect, useState } from "react"
import { useOrders } from "../../../utils/fetch/useOrders"
import Item from "../Item";


export default function Orders() {


 const { orders, loading } = useOrders();

 
 
    return (
        <div>
          {orders.map(order => (
            <div key={order.id}>
               <h2>User: {order.userOrder.name}</h2>
              
              <p>ID: {order.id}</p>
              <p>Status: {order.status}</p>
             <h3>orden de compra</h3>
                {order.orderP.map(product => (
                  <Item key={product.id}name={product.name}/>
                ))}
              
             
            </div>
          ))}
        </div>
      )
}
