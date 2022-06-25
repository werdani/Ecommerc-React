import axios from 'axios';

import React, {useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


export default function MyProfile(){
   let {id} = useParams();
   let [user, setUser] = useState();
   useEffect(() => {
      axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
         setUser(response.data);
      })
      .catch((error) => {
         console.log(error);
      });
   },[]);
    return(
       <div className='alert  p-5'>
          <h1>hello {user?.name}</h1>
          <p className='text-denger fs-4'>User ID is : {id}</p>
          <p className='text fs-4'>Name is : {user?.name}</p>
          <p className='text fs-4'>Username is : {user?.username}</p>
          <p className='text fs-4'>Email is : {user?.email}</p> 
          
  </div>
      );
   }