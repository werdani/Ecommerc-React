import Carousel from 'react-bootstrap/Carousel';
import { NavLink, Outlet} from 'react-router-dom';
import React from "react";

export default function About() {
   return(

      <div className='aler aler-dark p-5'>
         <div><h1>hello about VITTORIO STORE</h1></div>
      
      <div className='bg-light p-5 mt-4 rounded'>
         <div className='container'>
            <div className='row'>
               <div className='col-sm-6'>
                  <ul>
                     <li>
                        <NavLink to="company" className='nav-link'>
                           Company
                        </NavLink>
                     </li>
                     <li>
                        <NavLink to="materials" className='nav-link'>
                           Materials
                        </NavLink>
                     </li>
                  </ul>
               </div>
               <div className='col-sm-6'>
                   <h4>Informations</h4>
                  <Outlet />
                  </div>
            </div>
         </div>
      </div>
      </div>
   )
}
 