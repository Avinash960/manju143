import React, { useRef, useState } from 'react'

function Signup() {
  let FirstNameinput = useRef()
  let lastNameinput = useRef()
  let ageinput = useRef()
  let emailinput = useRef()
  let passwordinput = useRef()
  let mobileNoinput = useRef()
  let profileinput = useRef();

 let [profilepic,setprofile]=useState("./images/no__image.webp")

let connectingtoFD= async()=>{



let datatosend=new FormData()

datatosend.append("fn",FirstNameinput.current.value)
datatosend.append("lastName",lastNameinput.current.value)
datatosend.append("age",ageinput.current.value)
datatosend.append("email",emailinput.current.value)
datatosend.append("password",passwordinput.current.value)
datatosend.append("mobileNo",mobileNoinput.current.value)
datatosend.append("profile",profileinput.current.files[0])


let requestoption={
  method:"POST",
  body:datatosend

}

let JSONDATA = await fetch('http://localhost:1234/signup',requestoption)

let JSOData = await JSONDATA.json()

console.log(JSOData)
alert(JSOData.msg)



}





  return (
    <div>
      <div className='sign'>
     <marquee><h1>Signup</h1></marquee> 
       <form>
        <div>
          <label>First Name</label>
          <input ref={FirstNameinput}/>
        </div>


        <div>
          <label>Last Name</label>
          <input ref={lastNameinput}/>
        </div>

        <div>
          <label>Age</label>
          <input ref={ageinput}/>
        </div>

        <div>
          <label>Email</label>
          <input ref={emailinput}/>
        </div>

        <div>
          <label>Password</label>
          <input ref={passwordinput}/>
        </div>

        <div>
          <label>Mobile No</label>
          <input ref={mobileNoinput}/>
        </div>

        <div>
          <label>Profile pic</label>
          <input type='file' ref={profileinput} onChange={(eve)=>{
          
          let profieView=URL.createObjectURL(eve.target.files[0])
          setprofile(profieView)

          }}/>
           <img src={profilepic}></img>
        </div>


        <button type='button' onClick={()=>{
          connectingtoFD()
        }}>Signup</button>






       </form>
       </div>
    </div>
  )
}

export default Signup