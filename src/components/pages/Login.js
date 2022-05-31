import React, {useState} from 'react'

function Login({ Login, error}) {
    const[details,setDetails] = useState({name:"", email:"", password:""});
    
   const submitHandler = e =>{
       e.preventDefault();
       Login(details)
   }
    return (
        <form onSubmit={submitHandler}>
         <div className="form-inner">
         <h2>Login Form </h2>
         {(error != "") ? (<div className="error">{error}</div>):""}
         <div className="form-group">
             <label htmlFor="name">Name:</label>
             <input type="text" name='name' id="name" onChange={e=> setDetails({...details, name:e.target.value})} value={details.name}/>
             <br/>
             <div className="form-group">
             <label htmlFor="name">Password:</label>
             <input type="text" name='password' id="password" onChange={e=> setDetails({...details, password:e.target.value})} value={details.password}/>
             <br/>
             </div>
             <div className="form-group">
             <label htmlFor="name">Email:</label>
             <input type="text" name='email' id="email" onChange={e=> setDetails({...details, email:e.target.value})} value={details.email}/>
             </div>
             <input type="submit" value="Login"/>
         </div>
         </div>
        </form>
    )
}

export default Login;
