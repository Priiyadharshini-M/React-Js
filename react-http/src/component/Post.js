import React, { Component } from 'react'
import axios from 'axios'
class Post extends Component{
    constructor()
    {
        super()
        this.state={
            userId:'',
            title:'',
            completed:''
        }
    }
    changeHandle=(event)=>
    {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submitHandle=(event)=>
    {
        event.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/todos',this.state)
           .then(res=>{
               console.log(res)
           })
           .catch(err=>
            {
                console.log(err)
            })
    }
    render()
    {
        let {userId,title,completed}=this.props
        return(
            <div>
                <form onSubmit={this.submitHandle}>
                    <div>
                        <label>UserId</label>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandle}></input>
                    </div>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" value={title} onChange={this.changeHandle}></input>
                    </div>
                    <div>
                        <label>Status</label>
                        <input type="text" name="completed" value={completed} onChange={this.changeHandle}></input>
                    </div>
                    <div><button type='submit'>Submit</button></div>
                </form>
            </div>
        )
    }
}
export default Post