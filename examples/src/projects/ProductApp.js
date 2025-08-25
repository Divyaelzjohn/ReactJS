import { useState } from "react";
import ProductCard from "../components/ProductCard";
function ProductApp(){
  const products=[
    {id:1,name:"Shoes",price:2000},
    {id:2,name:"Watch",price:1500},
    {id:3,name:"Bag",price:1000}
  ];
  const [cart, setCart]=useState([]);

  //Function to add itemto cart
  const addToCart=(product)=>{
    setCart([...cart,product])
  }
  //addToCart -> A function that adds a product to the cart.  [...cart,product]->Creates a new array with all old cart items+the new product. 
  return(
    <div style={{padding:"20px"}}>
      <h1>Product Store</h1>
      <h2>Products:</h2>
      <div style={{display:"flex"}}>
        {products.map((p)=>(
          <ProductCard key={p.id} product={p} addToCart={addToCart}/>
        ))}
        {/* product.map()-> Loops htrough your products array. 
            for each product(p),it renders a ProductCart component.
            key={p.id} -> A unique key React needs when rendering lists.
            product={p} -> passing the whole product object as a prop
            addToCart={addToCart} -> passing the function as a prop , so the child can call it when user clicks the button */}
      </div>
      <h2>Cart ({cart.length} items)</h2>
      <ul>
        {cart.map((item, index)=>(
          <li key={index}>
            {item.name}-{item.price}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ProductApp;
