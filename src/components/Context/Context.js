import React, { createContext,useState,useEffect } from 'react'



export const Context = createContext(null)

export const Contextprovider=(props) =>{

    const [products,setproducts] = useState([])
    
    const fetchurl = () =>{
        return  fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setproducts(data))
      }
      
      useEffect(() => {
        fetchurl()
      }, [])
      



    const contextvalue={products}
    return (
        <Context.Provider value={contextvalue}>
            {props.children}
        </Context.Provider>
     )

}


