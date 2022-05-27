import React,{Component} from "react";
class PureCompRegular extends Component
{
       render()
    {
        console.log("Regular component")
        return(<h4>Hello Regular component {this.props.name}</h4>)
    }
}
export default PureCompRegular