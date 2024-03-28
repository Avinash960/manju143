import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  let navigate = useNavigate()


let emailinputRef=useRef()
let passwordinputRef=useRef();

let dispatch=useDispatch()


let sendtodataFD=async()=>{


let sendtodata=new FormData()
sendtodata.append("email",emailinputRef.current.value)
sendtodata.append("password",passwordinputRef.current.value)



let reqOptions={
  method:"POST",
  body:sendtodata
}
let JSONDATA=await fetch("http://localhost:1234/login",reqOptions);



let JSOData=await JSONDATA.json();


console.log(JSOData)

if(JSOData.status=="Failure"){
  alert(JSOData.msg)
}else{
  dispatch({type:"login",data:JSOData.data})
  navigate("/home")

}


};

  return (
    <div className='login'>
        <form>
            <div>
                <label>Email</label>
                <input ref={emailinputRef}/>
            </div>
           
            <div>
                <label>Password</label>
                <input ref={passwordinputRef}/>
            </div>

          <div>
            <button type='button'  onClick={()=>{

            sendtodataFD()
            }}>Login</button>
          </div>

        </form>
        <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Login