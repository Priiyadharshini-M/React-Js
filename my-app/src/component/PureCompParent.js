import React,{Component} from "react";
//import PureCompPure from "./PureCompPure";
//import PureCompRegular from "./PureCompRegular";
import MemoComp from "./MemoComp";
 class PureCompParent extends Component
// class PureCompParent extends PureComponent
{
    constructor()
    {
        super()
        this.state={
            name:"Priiya"
        }
    }
    componentDidMount()
    {
        setInterval(()=>
        {this.setState({name:"Priiyaaa"})},3000)
    }
    render()
    {
        console.log("........Parent component.......")
        return(
            <div>
                {/* <PureCompPure name={this.state.name}></PureCompPure>
                <PureCompRegular name={this.state.name}></PureCompRegular> */}
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}
export default PureCompParent