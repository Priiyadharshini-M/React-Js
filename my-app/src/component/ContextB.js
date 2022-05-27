import React,{Component} from "react";
import ContextC from './ContextC'
import Context from "./Context";
class ContextB extends Component{
    //static contextType=Context //if public use this instead of ContextB.contentType
    render()
    {
        return(
            <div>
                {/* //the Context is available here as this.context --> while using contextType*/}
                From Context B --- {this.context}
        <ContextC />
        </div>
        )
    }
}
ContextB.contextType=Context
export default ContextB