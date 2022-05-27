import React, {Component} from 'react'
class State extends Component{
    constructor(){
        super()
        this.state={
            mssg: 'Welcome everyone',
            count: 0,
            Increase5:0
        }
    }
    msgchange(){
        this.setState({
            mssg: "Thank you for coming"
        })
    }
    count()
    {
        this.setState({
            count:this.state.count+1
        },()=>
        {
            console.log(this.state.count);
        })
        //console.log(this.state.count); //it is asynchronous so prints first before button is clicked....so use callback
    }
    increament(){
        this.setState(previous=>({
            Increase5:previous.Increase5+1
        }))
    }
    increaseFive(){
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
    }
    // hello()
    // {
    //     console.log("clicked")
    // }
    render()
    {
        return(
            <div>
                <h1>{this.state.mssg}</h1>
                <button onClick={()=>{this.msgchange();this.count()}}>Quit</button>
                {/* <button onClick={this.hello}>Quit</button> */}
                <div>You clicked the Quit button {this.state.count} times</div>
                <button onClick={()=>this.increaseFive()}>Increase by 5</button> 
                <div>Count - {this.state.Increase5}</div>
            </div>
        )
    }
}
export default State;