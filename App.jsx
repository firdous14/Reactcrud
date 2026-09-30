import React from 'react'
import {useState} from 'react';

function App() {
    const[name, setName] = useState("");
    const[price, setPrice] = useState("");

    const[products, setProducts] = useState([]);

    function addProduct(){
        const newProduct = {
            name: name,
            price: price
        }

        setProducts([...products, newProduct]);

        setName("");
        setPrice("");
    }

    function deleteProduct(index){
        setProducts(products.filter((_,i)=> i!== index));
    }

 return (
    <div>
        <h1>CRUD</h1>
        <br></br>
        <input
        type="name"
        placeholder="name"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />
        <br></br>
        <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(e)=> setPrice(e.target.value)}
        />
        <br></br><br></br>

        <button onClick={addProduct}>Add Product</button>
        <br></br>
        <hr></hr>

        {products.map((product, index)=>(
            <div key={index}>
               <h3>{product.name}</h3>
               <h3>{product.price}</h3>

               <button onClick={()=> deleteProduct(index)}>Delete Product</button>
            </div>
        ))}

       

    </div>
  )
}

export default App