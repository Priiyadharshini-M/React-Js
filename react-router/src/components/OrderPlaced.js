import { useNavigate } from "react-router-dom";
const OrderPlaced=()=>
{
    const navg=useNavigate()
    return(
    <>
    <div>Your order is placed</div>
    <button onClick={()=>navg(-1)}>Go Back</button>
    </>)
}
export default OrderPlaced