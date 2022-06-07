import { useNavigate } from "react-router-dom"; //to navigate programmatically
const Home=()=>
{
    const navigate=useNavigate()
    return(
        <div>
            Home page!!!
            <div><button onClick={()=>navigate('orderplaced',{replace:true})}>Place order</button></div>
        </div>
    )
}
export default Home