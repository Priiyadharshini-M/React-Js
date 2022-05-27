import React,{Component} from "react";
class RenderProp extends Component
{
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }
    ClickHandle=()=>
    {
        this.setState(prev=>({
            count : prev.count+1
        }))
    // this.setState({
    //     count:this.state.count+1
    // })
    }
    render(){
        return (
            <div>
                {this.props.renderPropss(this.state.count,this.ClickHandle)} 
                {/* //pass this parameters value to app.js */}
            </div>
        )
    }
}
export default RenderProp