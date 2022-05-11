import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { store } from "../store"
import { addlogin } from "./action"



export const Login = ()=>{
    let dispatch = useDispatch()
 let loginstore = useSelector((store)=>store.login.login) 
 console.log(loginstore)
 let [state , setstate] = useState(false)
 console.log(state)
// console.log(loginstore)
let navigate= useNavigate()

let [loginstate , setlogin] = useState({
    password:"",
    username:""
})

let handleLogin = (e)=>{
    const {name , value} = e.target
     setlogin({
         ...loginstate,
         [name]:value
     })
}

let login = async(e)=>{
    e.preventDefault()
   try {
       let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
           method:"POST",
           body:JSON.stringify(loginstate),
           headers:{
            "Accept":"application/json",
            "content-type":"application/json",
        },
           
       })
       let data = await res.json()
       if(data.error===false){
        getuser(loginstate.username , data.token)
        // navigate("/dashboard")
    //    navigate("/dashboard")
         setstate(!state)
       }
       else{
           alert("Login details are wrong")
       }
       
   } catch (error) {
       console.log(error)
   }
}

let getuser = async (username, token) => {
    try {
        let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })
        var data = await res.json()
        
        dispatch(addlogin(data))
        // show_data(arr)
        
       
    }
    catch (err) {
        console.log(err)
       
    }
}



// description: "hoja "
// email: "kartiksoul777saini@gmail.com"
// mobile: "9412391283"
// name: "kartik saini soul777"
// token: "39c023e6f9c4d14fb3d4f52da84827f6"
// username: "kartik saini soul 777"
    return(
        <div>

            {state === false ?<form action="" onSubmit={login }>

<input type="text" value={loginstate.username} onChange={handleLogin} required={true} placeholder="Username" name="username"/>
<br />
<input type="password" value={loginstate.password} onChange={handleLogin}required={true} placeholder="password" name="password"/>
<br />
<input type="submit"   name="Submit" id="" />
</form> : <div>
           {loginstore.map(e=><div>
            <p>Name-{e.name}</p>
            <br/>
            <p>Mobile-{e.mobile}</p>
            <br/>
            <p>Email-{e.email}</p>
            <br/>
            <p>Username-{e.username}</p>
            <br/>
            <p>Description-{e.description}</p>
            </div>)}
            <Link to="/dashboard">Dashboard</Link>
    </div>}
           

           
              
        </div>
    )
}