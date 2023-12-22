import React,{useContext} from 'react'
import { NavLink,useNavigate} from 'react-router-dom';
import classes from "./Navbar.module.css";
import { MyContext } from '../../context/AppContext'; 
import AuthContext from '../../context/auth-context';


const MyNavbar = (props) => {

  const cartCtx= useContext(MyContext);
  let {cart}=cartCtx;
  const authCtx= useContext(AuthContext);
  const navigate= useNavigate();
  const isLoggedIn= authCtx.isLoggedIn;

  const numberOfCartItems=cart.length;
  
  const logoutHandler=()=>{
    authCtx.logout();
    navigate('/home');
  }


  return ( 
    <header>
       <div className={classes.navbar}> 
       <ul className={classes.header}>
       <li><NavLink activeclassname={classes.active} to="/home">Home</NavLink></li>
       <li><NavLink activeclassname={classes.active} to="/">Store</NavLink></li>
       <li><NavLink activeclassname={classes.active} to="/about">About</NavLink></li>
       {!isLoggedIn && <li><NavLink activeclassname={classes.active} to="/login">LogIn</NavLink></li>}
       <li><NavLink activeclassname={classes.active} to="/contactUs">Contact Us</NavLink></li>
       {isLoggedIn && <li className={classes.cartData}><button className={classes.cart_holder} id='cart' onClick={props.onShowCart}>Cart</button>
       <span className={classes.cart_number}><sup>{numberOfCartItems}</sup></span></li>}
       {isLoggedIn && <li><button onClick={logoutHandler} className={classes.logoutBtn}>Logout</button></li>}
       <div>
       </div>
                 
   </ul>
   </div>
           
            <h1>Shoes Express</h1>
        </header>
  
  )
}

export default MyNavbar;