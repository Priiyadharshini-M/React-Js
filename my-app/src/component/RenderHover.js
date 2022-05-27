import React,{Component} from "react";
class RenderHover extends Component{
    render()
    {
        const {count,ClickHandle}=this.props;
        return(<h4 onMouseOver={ClickHandle}>Hovered {count} times</h4>)
    }
}
export default RenderHover