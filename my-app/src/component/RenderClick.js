import React,{Component} from "react";

class RenderClick extends Component{
    render()
    {
        const {count,ClickHandle}=this.props;
        return(<button onClick={ClickHandle}>Clicked {count} times</button>)
    }
}
export default RenderClick