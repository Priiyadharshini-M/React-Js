//import { Link } from "react-router-dom"; //for an selectable link(anchor tag)
import { NavLink } from "react-router-dom"; //to know the active link---by default it applies active class to anchor element
import { useAuth } from "./Auth";

const Navbar=()=>
{
    const navStyle=({isActive})=>  //style of navLink gives isActive flad which can be destructed here
    {
        return{
            fontWeight : isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline'
        }
    }

    const auth=useAuth() //if user not logged in then only show login button in nav bar otherwise not


    return(
        <nav className="primary-nav">
            <NavLink style={navStyle} to="/">Home</NavLink> {/*//instead of href attribute here we include to prop */}
            <NavLink style={navStyle} to="/about">About</NavLink>  {/*//can style here (or) can style in index.js */}
            <NavLink style={navStyle} to="/products">Products</NavLink>
            <NavLink style={navStyle} to="/profile">Profile</NavLink>

            {!auth.user && (<NavLink style={navStyle} to="/login">Login</NavLink>)}
            {/* <a href="/">Home</a>
            <a href="/about">About</a> */}
        </nav>
    )
}
export default Navbar