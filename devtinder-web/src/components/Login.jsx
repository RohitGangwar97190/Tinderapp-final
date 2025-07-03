import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from "../utils/UserSlice";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [emailId,setEmailId]=useState(" ");
const [password,setPassword]=useState(" ");
const [error,setError]=useState(" ");
const [firstName,setfirstName]=useState("");
const [lastName,setlastName]=useState("");
const [isLoggedIn,setisLoggedIn]=useState(false);
const dispatch=useDispatch();
const navigate=useNavigate();
const handlelogin=async ()=>{
  try {
    const response = await axios.post(
      "http://localhost:3000/login",
      {
        emailId,
        password,
      },
      {
        withCredentials: true, // for cookies/session handling
      }
    );

    // console.log("Login successful:", response.data);
    // Redirect or update UI here
    
    dispatch(addUser(response.data));
    return navigate("/");
    
  }
 
  catch(err)
  {
    setError(err.response.data);
    console.log(err);
  }
}
const handlesignup=async()=>{
  try{
  const res=await axios.post("http://localhost:3000/signup",
    {firstName,
      lastName,
      emailId,
     password,

    },
    {
    withCredentials:true,
  })
  dispatch(addUser(res.data.data));
  navigate("/profile");
}
catch(err)
{
  console.log("there is a error in signup",err);
}
}
  return (
//    <div className='flex justify-center'>
//       <div className="card text-primary-content w-96 flex justify-center mt-10 bg-base-200">
//         <div className='flex justify-center items-center'> 
//         <h2 className="card-title items-center mt-4 text-red-600"> 
//           {isLoggedIn? "Login":"SignUp"}
//         </h2>
//         </div>
      
//     <div className="card-body  mt-10 bg-base-300">
//     {!isLoggedIn && (
//   <>
//     <div>
//       <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
//       <input
//         type="text"
//         id="firstName"
//         name="firstName"
//         value={firstName}
//         onChange={(e) => setfirstName(e.target.value)}
//         required
//         className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//     </div>
//     <div>
//       <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
//       <input
//         type="text"
//         id="lastName"
//         name="lastName"
//         value={lastName}
//         onChange={(e) => setlastName(e.target.value)}
//         required
//         className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//     </div>
//   </>
// )}

     
//       <div>
//           <label for="email" class="block text-sm font-medium text-gray-700">Email ID:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={emailId}
//             onChange={(e)=>setEmailId(e.target.value)}
//             required
//             class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e)=>setPassword(e.target.value)}
//             required
//             class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//      <p className='text-red-600'>{error}</p>
//       <div className="card-actions flex justify-center">
        
//         <button type="submit" className="btn bg-blue-600" onClick={isLoggedIn?handlelogin:handlesignup}>
//           {isLoggedIn? "Login":"Sign Up"}
//         </button>
//       </div>
//       <p className='' onClick={()=>setisLoggedIn(value=>!value)}>
//         {isLoggedIn ? "New user? signup Here?" :
//         "Existing user? Login Here"}</p>
//     </div>
//   </div>
//   </div>
<div className='flex justify-center'>
  <div className="card w-96 flex justify-center mt-10 bg-base-200 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-500 ease-in-out">
    <div className='flex justify-center items-center'> 
      <h2 className="card-title text-red-600 text-2xl font-semibold mt-4 transform transition-all duration-300 hover:text-blue-600"> 
        {isLoggedIn ? "Login" : "SignUp"}
      </h2>
    </div>

    <div className="card-body mt-6 bg-base-300 rounded-xl shadow-inner p-4">
      {!isLoggedIn && (
        <>
          <div className="mb-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all duration-300"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all duration-300"
            />
          </div>
        </>
      )}

      <div className="mb-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all duration-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all duration-300"
        />
      </div>

      <p className='text-red-600 text-sm mb-4'>{error}</p>

      <div className="card-actions flex justify-center">
        <button type="submit" className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105" onClick={isLoggedIn ? handlelogin : handlesignup}>
          {isLoggedIn ? "Login" : "Sign Up"}
        </button>
      </div>

      <p className='text-center text-sm mt-4 cursor-pointer hover:text-blue-500' onClick={() => setisLoggedIn((value) => !value)}>
        {isLoggedIn ? "New user? Sign up here!" : "Existing user? Login here"}
      </p>
    </div>
  </div>
</div>



 
  )
}

export default Login