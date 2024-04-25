import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import MovieList from '../components/MovieList/movie-list';
import Navbar from '../components/navbar/Navbar';
import { database } from '../Firebase';
import "./Signup.css"

function Singnup() {
  const [login,setlogin]=useState(false);
  
 

  const nav=useNavigate()
 const handlesubmit=(e,type)=>{
  e.preventDefault();
  const email=e.target.email.value;
  const password=e.target.password.value;
  if(type==="Signup")
  {
    createUserWithEmailAndPassword(database,email,password).then(data=>{
      console.log(data,"authData");
      nav("/home");
      
      
    }).catch(err=>{
      alert(err.code);
     
    })
  }
  else{
    signInWithEmailAndPassword(database,email,password).then(data=>{
      console.log(data,"authData");
      nav("/home");
      

    }).catch(err=>{
      alert(err.code);
      
    })
  }
 
 }
  return (
    <div className='main1'>
      <marquee style={{color:"White", fontSize:"30px"}}>IF YOU DONT HAVE AN ACCOUNT PLEASE SIGNUP </marquee>
      <div className="control_main">
      <div className="s1" style={{cursor:"pointer"}} onClick={()=>{setlogin(true)}}>SignIn</div>
      <div  className= "s2"style={{cursor:"pointer"}} onClick={()=>{setlogin(false)}}>SignUp</div>
      
      <h1 className='main'>{login?"SingnIn":"SignUp"}</h1>
      
        <form onSubmit={(e)=>{handlesubmit(e,login?"Singnin":"Signup")}}>
          <input className='in1' name="email" type="email" placeholder="Email"/> <br/>
          <input  className="in2"name="password" type="password" placeholder="password"/><br/>
          <button className='b1'>{login?"Singnin":"Signup"}</button>
        </form>
       
        
      </div>
     
      
    </div>
  )
}

export default Singnup