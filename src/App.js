import React from 'react';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import Shop from './Shop';
import ReviewForm from './Review';
import { useState } from 'react';
function pushToCart(newcart,data){
  if (data!=null){
    newcart.push(data)
  }
}

function App() {
  
  const [cart, setCart]=useState({
    data: null
  })
  const[newcart,setNewCart]=useState({
    cart:[]
})

const[userReview,setUserReview]=useState({
  reviews:[],
  recieved:false,
  
})
  return (

    <div className="App">
       <div className="topnav">
        <ul>
          <li>
            <Link to="/shop"> Shop </Link>
            <Link to="/cart"> Cart </Link>
            <Link to="/home"> Home </Link>
          </li>
         

        </ul>
        
        <Routes>
            <Route path="/home" element={
                <Home userData={userReview.reviews}/>
                
            } />

            <Route path="/review" element={

                <ReviewForm sendReview={(reviewData)=>{ setUserReview({
                  reviews:[reviewData]

                })

                }}/>
                
            } />
             
             <Route path="/shop" element={
                <Shop addToCart={(cardData)=>{ setCart({
                  data:cardData
                });pushToCart(newcart.cart,cardData)
                
                  
                }}  />
            } />
            <Route path="/cart" element={
               
               <Cart  itemData={newcart.cart}   />
           } />
           
           
        </Routes>
    
        </div>


      
     
    </div>
  );
}

export default App;
