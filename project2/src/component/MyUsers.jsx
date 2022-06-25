import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Table from 'react-bootstrap/Table';


export default function MyUsers() {
   const [users, setUsers] = useState([]);
   axios
     .get('https://jsonplaceholder.typicode.com/users')
     .then((res) => setUsers(res.data))
     .catch((e) => console.log(e));
  return (
   <div className="text-center my-2 rounded container">
   <Table striped bordered hover variant="dark">
     <thead>
       <tr>
         <th scope="col">ID</th>
         <th scope="col">Username</th>
         <th scope="col">Email</th>
         <th scope="col">Action</th>
       </tr>
     </thead>
     <tbody>
       {users.map((usr) => (
         <tr key={usr.id}>
           <th>{usr.id}</th>
           <td>{usr.username}</td>
           <td>{usr.email}</td>
           <td>
             <NavLink className="nav-link" to={`/users/${usr.id}`}>
               more
             </NavLink>
           </td>
         </tr>
       ))}
     </tbody>
   </Table>
 </div>
  )
}
