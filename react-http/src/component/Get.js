import React,{Component} from 'react';
import axios from 'axios';
class Get extends Component{
    constructor()
    {
        super()
        this.state={
            list:[],
            errmsg:''
        }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/todos') //use axios to fetch data from server
        .then(res=>{   //axios always behave like promises, so we can use .then and .catch
            console.log(res)
            this.setState({
                list:res.data
            })
        })
        .catch(err=>
            {
                console.log(err)
                this.setState({
                    errmsg:"Error happened"
                })
            })
    }
    render()
    {
        let {list,errmsg}=this.state
        return(
            <div>
                List of Data
                {
                    list.length ? list.map(lis=><div key={lis.id}>Title : {lis.title} Author : {lis.userId}</div>) : null //objects are not valid as react child, so use array using map and access to keys
                }
                {
                    errmsg?<div>{errmsg}</div>:null
                }
            </div>
        )
    }
}
export default Get