import { Link, Outlet } from "react-router-dom";
const Products=()=>
{
    return(
        <div>
            <>
            <br></br>
            <input type="search" placeholder="Search products"></input>
            <nav>
                <Link to="featured">Featured Products</Link>
                <Link to="new">New Products</Link>
            </nav>
            <Outlet />
            </>
        </div>
    )
}
export default Products