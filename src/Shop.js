import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './myStyles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";

function findItem(type,products,setNewCart,newcart,setCart,oldData){
    
    console.log(type)
    if (type===null || type===""){
        newcart=oldData
     
    }
    else{
        newcart=oldData.filter(products=>products.type===type)
    }
   
    setCart(
        newcart
        
        
    )
    //state of items: [{},{}]
    console.log("updated items")
    console.log(newcart)
    console.log("original items")
    console.log(oldData)
    







}

function Shop(props){

    function addQ(product,updateQuantity,increment){
        product.quantity++
        // setProduct(products)
        updateQuantity({
            isUpdated:!increment
        })
        
    }
    function removeQ(product,updateQuantity,increment){
        if(product.quantity>=1){
             product.quantity--
            // setProduct(products)
            updateQuantity({
                isUpdated:!increment
            })
            

        }
        
        
    }
    
   
    const[Quantity, setQuantity]=useState({
        items:0,
        isUpdated:false
    })

    const[filter,setFilter]=useState({
        result: null
    })
    const[filterCart,setFilterCart]=useState({
        filterCart:null
    })
    
    // function addToCart(productInfo){

    // }
    const[Item,setItem]=useState([

        {
            id:0,
            name:"Super Smash Bros", 
            price:"$50",
            desc: "super smash bros nintendo switch game",
            img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQsJB3d0DNvYNt3KBb8q6koUFmOSWNFKW7xWCSF4atd-YBx4Y7HTx8EakpXfVVz5HKw2COT2-2JkEz0QEPQIPWyl_377GrAUYEqEa5hhuY&usqp=CAE",
            quantity:0,
            type: "fighting"
            

        },
        {
            id:1,
            name:"FIFA 22", 
            price:"$80",
            desc: "fifa soccer ps5 game",
            img:"https://www.orly.es/39948-large_default/fifa-2022-ps5.jpg",
            quantity:0,
            type:"sports"

        },
        {
            id:2,
            name:"NBA 2K", 
            price:"$70",
            desc: "s2k basketball ps5 game",
            img:"https://media.gamestop.com/i/gamestop/11151959/NBA-2K22----PlayStation-5",
            quantity:0,
            type: "sports"

        },
        
        
        
    ])
    

    const [originalData,setOriginalData]=useState(Item)
   
    
    return(
        
        <div>
            
            <h1>Shopping Page </h1>
            
            <Form>
            <Form.Group>
              <Form.Label>Filter by (fighting,sports)</Form.Label>
              <Form.Control type="text" name="filter" placeholder="type" onChange={(e)=>setFilter({
                
                result:e.target.value
                
              })}  ></Form.Control>
              </Form.Group>
              <Button onClick={()=>findItem(filter.result,Item,setFilterCart,filterCart,setItem,originalData)}> Submit</Button>
             
              </Form>
            <div className="products">
            {Item.map(product=> 
            <Card key={product.id} greeting={"hi"} bg={"dark"} text={"light"}className="block"  style={{ width: '18rem' }}>
            
            <Card.Img src={product.img} width={100}/>
            
         
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
                 
                Price:{product.price}<br></br>
                Description: {product.desc}
             
            </Card.Text>
            
            <Button onClick={()=>removeQ(product,setQuantity,Quantity.isUpdated)} >-</Button>{product.quantity}
            <Button onClick={()=>addQ(product,setQuantity,Quantity.isUpdated)} >+</Button>

            <Button variant="success" onClick={()=>props.addToCart(product)} >Submit</Button>
            
            
            
          </Card.Body>
        </Card>)}
        </div>
       
        
        
        </div>
        

  
      
      
        
    );
    
    

}
export default Shop;