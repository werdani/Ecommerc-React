import './App.css';

import MyNav2 from './component/MyNav2.jsx'; 
import MyFooter2 from './component/MyFooter2.jsx';
import MyCard2 from './component/MyCard2.jsx';
import MyProfile from './component/MyProfile.jsx';
import About from './component/About.jsx';
import Home from './component/Home.jsx';
import LogIn from './component/Mylogin.jsx';
import Error from './component/Error.jsx';
import Company from './component/company.jsx';
import Matirials from './component/materials.jsx';
import Counter from './component/Counter.jsx';
import MyUsers from './component/MyUsers.jsx';

import {Navigate, Route,Routes} from "react-router-dom";


function App() {
  return (
    <>
      <MyNav2 />
      <Routes>
         <Route path='/' element={<Navigate to="home" />} /> 
         <Route path='/home' element={<Home />} /> 
         <Route path='/products' element={<MyCard2 />} />
         <Route path='/users/:id' element={<MyProfile />} />
         <Route path='/counter' element={<Counter />} />

         <Route path='/about' element={<About />}> 
            <Route path='company' element={<Company />} />
            <Route path='materials' element={<Matirials />} />
         </Route>

         <Route path='/users' element={<MyUsers />} /> 
         <Route path='/login' element={<LogIn />} /> 
         <Route path='*' element={<Error />} /> 
      </Routes>
      <MyFooter2 />
  
  </>
  );
}

export default App;
