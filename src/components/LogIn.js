import React from 'react'
import { useState , useEffect } from 'react'
import "./LogIn.css"
import { useNavigate } from 'react-router-dom'


const LogIn = ()=>{

    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")

    const Nav = useNavigate()

    useEffect(()=>{
        const data = localStorage.getItem("user")
        if(data){
            Nav("/home")
        }
    })

    const LogInUser = async function(){
        let data = await fetch('http://localhost:5000/login',{
            method : "post",
            body : JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const res = await data.json();

        if(res.data != undefined){
        localStorage.setItem("user",JSON.stringify(res))
        Nav("/home")
        }else{
            alert(res.msg)
        }
        
        
      
    }
    return(
        <div>
            <h1 className= "title">LogIn</h1>
            <input className= "LogInClass" value={email} onChange = {(event)=>setemail (event.target.value)} type="text" placeholder='Enter your Email'/>
            <input className= "LogInClass" value={password} onChange = {(event)=>setpassword (event.target.value)} type="text" placeholder='Enter your Password'/>
            <button onClick={LogInUser} className = "button" type='button' > LogIn </button>
        </div>
    )
}

export default LogIn