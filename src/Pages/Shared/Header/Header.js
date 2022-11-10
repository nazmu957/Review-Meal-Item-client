import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import logo from '../../../images/logo.jpeg'
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    // const menuItems = <>
    //     <li className='font-semibold '><Link to='/'>Home</Link></li>
    //   <li className='font-semibold '><Link to='/blog'>Blog</Link></li>
     
      
    // </>


    return (
        <div className="navbar mb-6 bg-zinc-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li className='font-semibold '><Link to='/'>Home</Link></li>
        <li className='font-semibold '><Link to='/blog'>Blog</Link></li>

        {
      user?.uid ?
      
          
            <>
            <li  className="text-sm font-semibold "><Link to="/addService">Add Service</Link></li>
            <li  className="text-sm font-semibold "><Link to="/myReview">My Review</Link></li>
            <button onClick={logOut} className="text-sm font-semibold ">LogOut</button>
            </>
          
      :
     <>
      <li  className="text-sm font-semibold "><Link to="/signup">SignUp</Link></li>
      <li  className="text-sm font-semibold "><Link to="/login">Login</Link></li>
     
      
     </>
    }
    {
      user?.photoURL ?
     <>
     {/* <h2>{user?.displayName}</h2> */}
     <img className='rounded-full' style={{height: '40px', width:'40px'}} src={user.photoURL} alt=""/>
     </>
      :
      <FaUserAlt className="text-dark ml-3 " style={{ height: '20px', width:'20px' }}></FaUserAlt>
    }
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
        <img src={logo} width="48px"  alt=""/>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
        <li className='font-semibold '><Link to='/blog'>Blog</Link></li>
          <li className='font-semibold '><Link to='/'>Home</Link></li>

          {
      user?.uid ?
      
          
            <>
           <li  className="text-sm font-semibold "><Link to="/addService">Add Service</Link></li>
            <li  className="text-sm font-semibold "><Link to="/myReview">My Review</Link></li>
            <button onClick={logOut} className="text-sm font-semibold ">LogOut</button>
            </>
          
      :
     <>
      <li  className="text-sm font-semibold "><Link to="/signup">SignUp</Link></li>
      <li  className="text-sm font-semibold "><Link to="/login">Login</Link></li>
      
     </>
    }
    {
      user?.photoURL ?
     <>
     {/* <h2>{user?.displayName}</h2> */}
     <img className='rounded-full ml-5' style={{height: '40px', width:'40px'}} src={user.photoURL} alt=""/>
     </>
      :
     <FaUserAlt className="text-dark mt-3" style={{ height: '20px', width:'20px' }}></FaUserAlt>
    }
    </ul>
  </div>
  
  <div className="navbar-end">

    

    
   
    
  </div>
</div>
    );
};

export default Header;