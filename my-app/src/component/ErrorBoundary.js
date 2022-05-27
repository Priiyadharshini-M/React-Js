import React,{Component} from "react";
class ErrorBoundary extends Component{
    constructor()
    {
        super()
        this.state={
            anyError:false
        }
    }
    static getDerivedStateFromError(error)
    {
        return{
            anyError:true
        }
    }
    componentDidCatch(error,info)
    {
        console.log(error)
        console.log(info)
    }
    render()
    {
        if(this.state.anyError){
        return(<h4>Something went wrong</h4>)
        }
        return this.props.children
    }
}
export default ErrorBoundary