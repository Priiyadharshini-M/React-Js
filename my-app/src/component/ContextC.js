import React,{Component} from "react";
import { ContextConsumer } from "./Context";
class ContextC extends Component{
    render()
    {
        return(
         <ContextConsumer> {/* used to consume the context value where ever necessary ----> pass function as a child to consumer component*/}
            {
                (username)=> //by having the value passed in provider as a parameter
                {
                    return <div>From Context C....Hello {username}</div>
                }
            }
        </ContextConsumer>
        )
    }
}
export default ContextC