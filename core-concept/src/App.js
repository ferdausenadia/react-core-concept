import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {name:'Photoshop', price:'$90', Access:'Life-Time'},
    {name:'Illustrator', price:'$60', Access:'6 month'},
    {name:'PDF Reader', price:'$40', Access:'1 year'}

  ]



  const tigers =['sakib','Sabbir Ornob Ovi ', 'riad', 'rahim', 'mash', 'iqbal']
  
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <h1>Team tigers Name List for 2023 World cup Final</h1>
        <ul>
          {tigers.map(tiger => <li>{tiger}</li>)}
        </ul>

        {
          products.map(product=><li>{product.name} {product.price}</li>)
        }

{
    products.map(product=><Product pr={product}></Product>)
  }
  <Product pr={products[0]}  ></Product>
        
        <Person name="Shakib Al Hasan" job="Cricketer"></Person>
        <Person name="Christiano Ronaldo" job="Footballer"></Person>
        <Person name="Einstein" job="Scientist"></Person>
        
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] =useState([]);
  
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=> setUsers(data))
    })
    
   
  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3> 
      <ul>
        {users.map(user=> <li>{user.name}</li>)}</ul>       
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease=()=>setCount(count+1)
  
  
  return (
    <div><h1>Count:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <button onClick={()=>setCount(count-1)}>Decreases</button></div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid red',
    borderRadius:'5px',
    
    width:'200px',
    height:'200px',
    float:'left'
  }
  const {name, Access}=props.pr;
  return(
    <div style ={productStyle}>
      <h3>{name}</h3>
      <h5>{Access}</h5>
      <button>Buy Now</button>

    </div>
  )

}

function Person(props){
  const personStyle={
    border:'2px solid salmon',
    width:'400px'
  }
  return(
    <div style={personStyle}>
      <h3>Name: {props.name}</h3>
      <h2>Job:{props.job}</h2>
    </div>
  )
}

export default App;