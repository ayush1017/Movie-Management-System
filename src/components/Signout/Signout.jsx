import React from 'react'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { database } from "../../Firebase"
import "./Signout.module.css"
function Signout() {
    const nav1 = useNavigate()
    const handlesignout = () => {
        signOut(database).then(val =>{
            console.log(val, "val")
            nav1('/');
        })
    }
  return (
    <div>
        <button style={{padding:"10px 15px", backgroundColor:"crimson", color:"White" ,cursor:"pointer"}} onClick={handlesignout}>Signout</button>
    </div>
  )

  }

export default Signout