import React, {useState, userEffect} from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


const AdminLogin = ()=>{
    // let[token, setToken]= useState("");
   
    // let[email, setemail] = useState("");
    // let[password, setPassword] =useState("");
    

   
    // const navigate = useNavigate();

    
    
    // const loginSubmit= ()=>{
    //     var obj = {email: email, password: password};
    //     alert (obj.email);
    //     axios.post("http://127.0.0.1:8000/api/login",obj)
    //     .then(resp=>{
    //         var user = resp.data;
    //         console.log(token);
    //         var user = {userId: token.userid, access_token:token.token};
    //         localStorage.setItem('user',JSON.stringify(user));
    //         console.log(localStorage.getItem('user'));
           
    //         if(token == "No user found"){
    //             navigate('/AdminLogin');
    //         }else{
    //             navigate('/Dashboard');
    //         }
    //     }).catch(err=>{
    //         console.log(err);
           
    //     });let[token, setToken]= useState("");
    let[token, setToken]= useState("");
    let[email, setemail] = useState("");
    let[password, setPassword] =useState("");
    const navigate = useNavigate();
    const [formError,setformerror]=useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        
    }


    const loginSubmit= ()=>{
        var obj = {email: email, password: password};
        alert (obj.email);
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {userId: token.userid, access_token:token.token};
            localStorage.setItem('user',JSON.stringify(user));
            console.log(localStorage.getItem('user'));
            if(token == "No user found"){
                navigate('/AdminLogin');
            }else{
                navigate('/Dashboard');
            }
        }).catch(err=>{
            console.log(err);
        });


    }
    return(

        

<div className="Auth-form-container">
    <div className="Auth-form-content">
    <form className="Auth-form" onSubmit={handleSubmit(onSubmit)} >
      
      <h3 className="Auth-form-title">Sign In</h3>
          <br></br>
       
            <div className="form-group mt-3">
            <label>Email address</label>
           
                <input type="text" {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}  value={email} onChange={(e)=>setemail(e.target.value)}></input>
                            
                {errors.Email && <p>Please check the Email</p>}
                </div>
                <br></br>
                
                <label>Password</label>
                <input type="password"{...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })} value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                
                {errors.password && <p>Please check the Password</p>}

            </form>
            
                <button onClick={loginSubmit} className="btn btn-primary">Login</button>
                
                
        </div>
        </div>

    )
}
export default AdminLogin;  