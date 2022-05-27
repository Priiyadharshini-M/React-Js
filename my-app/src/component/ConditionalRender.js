import React,{Component} from 'react'
class ConditionalRender extends Component{
    constructor()
    {
        super()
        this.state={
            LoggedIn:true
        }
    }
    render()
    {
        return (this.state.LoggedIn && <div>Welcome Priiya!! You have logged in</div>) //using short circuit operator


        // return (this.state.LoggedIn ? <div>Welcome Priiya!! You have logged in</div> : (<div>Welcome Guest!! You should sign in</div>)) // using ternary operators
        
        
        // let message //using element variables
        // if(!this.state.LoggedIn)
        // {
        //     message="Welcome Guest!! You should sign in"
        // }
        // else{
        //     message="Welcome Priiya!! You have logged in"
        // }
        // return(<div>{message}</div>)

        
        // if(!this.state.LoggedIn) //using if-else
        // {
        //     return <div>Welcome Guest!! You should sign in</div>
        // }
        // else{
        //     return <div>Welcome Priiya!! You have logged in</div>
        // }
    }
}
export default ConditionalRender