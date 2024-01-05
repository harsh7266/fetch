import React, { useContext} from 'react'


import './product.css'
import { Context } from './Context/Context'

export const Products = (props) => {
  
  const{products}=useContext(Context)
  
  


  return (
   <div className='products'>
     {products.map((object)=>{
        return (
            <div>   
            <img src={object.image} alt=''></img>
            <p>{object.title}</p>
            <button >Add to cart</button>
            </div>
         
           
          
        )
    })}

   </div>
   
  )
}



