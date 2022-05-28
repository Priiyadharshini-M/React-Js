import React,{Component} from 'react';
import axios from 'axios';
class Get extends Component{
    constructor()
    {
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/todoshttps://jsonplaceholder.typicode.com/todos')
        .then(res=>{
            console.log(res)
            this.setState({
                list:res.data
            })
        })
        .catch(err=>
            {
                console.log(err)
            })
    }
    render()
    {
        return(
            <div>

            </div>
        )
    }
}
export default Get