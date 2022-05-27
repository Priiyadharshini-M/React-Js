import React,{PureComponent} from "react";
class PureCompPure extends PureComponent
{
    render()
    {
        console.log("Pure component")
        return(<h4>Hello PureComponent {this.props.name}</h4>)
    }
}
export default PureCompPure