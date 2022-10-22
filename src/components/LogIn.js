import React from 'react'
import "./LogIn.css"
import { useState } from 'react'


const LogIn = ()=>{
    const [fname,setfname] = useState("")
    const [lname,setlname] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")

    const register = async function(){
        let data = await fetch('http://localhost:3001/register' ,{
            method : "post",
            body : JSON.stringify({fname,lname,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
    }
    return (
        <div>
            <h1 className='title'>Registration </h1>
            <input className= "logIn" value={fname} onChange = {(event)=>setfname (event.target.value)} type="text" placeholder='Enter your first name'/>
            <input className= "logIn" value={lname} onChange = {(event)=>setlname (event.target.value)} type="text" placeholder='Enter your last name'/>
            <input className= "logIn" value={email} onChange = {(event)=>setemail (event.target.value)} type="text" placeholder='Enter your Email'/>
            <input className= "logIn" value={password} onChange = {(event)=>setpassword (event.target.value)} type="text" placeholder='Enter your Password'/>
            <button onClick={register} className = "button" type='button' > Register </button>
        </div>
    )
}

export default LogIn