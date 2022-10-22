import React from 'react'
import "./Register.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Register = ()=>{
    const [fname,setfname] = useState("")
    const [lname,setlname] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")

    // const Nav = useNavigate()

    // useEffect(()=>{
    //     const data = localStorage.getItem("user")
    //     if(data){
    //         Nav("/home")
    //     }
    // })

    const registerUser = async function(){
        let data = await fetch('http://localhost:5000/register',{
            method : "post",
            body : JSON.stringify({fname,lname,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })


        const res = await data.json();
        // localStorage.setItem("user",JSON.stringify(res))
        // Nav("/login")

        alert(res.msg)
        // console.log(res.msg,res.staus);
        // console.warn(res)
    }
    
    // console.warn(register)
    return (
        <div className='registerForm'>
            <h1 className='title'>Registration </h1>
            <input className= "RegisterClass" value={fname} onChange = {(event)=>setfname (event.target.value)} type="text" placeholder='Enter your first name'/>
            <input className= "RegisterClass" value={lname} onChange = {(event)=>setlname (event.target.value)} type="text" placeholder='Enter your last name'/>
            <input className= "RegisterClass" value={email} onChange = {(event)=>setemail (event.target.value)} type="text" placeholder='Enter your Email'/>
            <input className= "RegisterClass" value={password} onChange = {(event)=>setpassword (event.target.value)} type="text" placeholder='Enter your Password'/>
            <button onClick={registerUser} className = "button" type='button' > Register </button>
        </div>
    )
}

export default Register