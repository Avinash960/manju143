const mongoose = require('mongoose');
const express = require("express")
const cors = require("cors")
let multer =require("multer")
const status = require("statuses");


let app=express()
app.use(cors());

app.use("/uploads",express.static("uploads"));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`)
    }
  })
  
  const upload = multer({ storage: storage })



let userschema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    email:String,
    password:String,
    mobileNo:Number,
    profilepic:String,
});

let User= new mongoose.model('User',userschema);

app.post("/signup",upload.single("profile"),async(req,res)=>{


    console.log(req.body)
    console.log(req.file)


    try{


        let userdetails = new User({
            firstName:req.body.fn,
            lastName:req.body.lastName,
            age:req.body.age,
            email:req.body.email,
            password:req.body.password,
            mobileNo:req.body.mobileNo,
            profilepic:req.file.path,
          })
        
          await User.insertMany([userdetails])
        res.json({status:"Success",msg:"User created account successfully"})
        
        
    }catch(err){

    console.log("unable to create account")
    console.log(err)
    }

 
})

app.post("/login",upload.none(),async(req,res)=>{

console.log(req.body)


let userdetails=await User.find().and({email:req.body.email})




if(userdetails.length > 0){

    if(userdetails[0].password==req.body.password){



         
        let dataObj = {
          firstName:userdetails[0].firstName,
        lastName:userdetails[0].lastName,
        age:userdetails[0].age,
        email:userdetails[0].email,
        mobileNo:userdetails[0].mobileNo,


        }
      

      res.json({status:"Scussess",data:dataObj})
    }else{
      res.json({status:"Failure",msg:"Invalid password"})
    }

}else{
res.json({status:"Failure",msg:"User can't exist"})
}

});


// app.patch("/update",upload.single("profile"),async(req,res)=>{

// await User.updateMany({email:req.body.email},{

//   firstName:req.body.fn,
//   lastName:req.body.lastName,
//   age:req.body.age,
//   mobileNo:req.body.mobileNo,
//   password:req.body.password,
//   profilepic:req.file.path


// })

// res.json({status:"Success",msg:"Updated Successfully"});
// console.log(req.body)


// })




app.listen(1234,()=>{
console.log("connected to the port 1234")
})

let connectedtoDB=()=>{
    try{
        mongoose.connect('mongodb://localhost:27017/Database')
        console.log('Scuessfully connected to the database')
    }catch(error){console.log('unable to connected to the database')
   console.log(error)
}

};



connectedtoDB();