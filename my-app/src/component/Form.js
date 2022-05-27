import React, { Component } from "react";
class Form extends Component{
    constructor()
    {
        super()
        this.state={
            name:"",
            address:"",
            course:"Php" //initially set value to React
        }
    }
    changeInput=(event)=>
    {
        this.setState({
            name:event.target.value
            // address:event.target.value
        })
    }
    changeAdress=(event)=>
    {
        this.setState({
            address:event.target.value
        })
    }
    changeCourse=(event)=>
    {
        this.setState({
            course:event.target.value
        })
    }
    handleSubmit=(event)=>
    {
        alert(this.state.name+" registered successfully to "+this.state.course)
        event.preventDefault()
    }
    render()
    {
        return(
            <div>
                <h4>Register Form</h4>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name </label>
                        <input type="text" value={this.state.name} onChange={this.changeInput}/>
                    </div><br></br>
                    <div>
                        <label>Address </label>
                        <textarea value={this.state.address} onChange={this.changeAdress}></textarea>
                    </div><br></br>
                    <div>
                        <label>Course </label>
                        <select value={this.state.course} onChange={this.changeCourse}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Python">Python</option>
                            <option value="Php">Php</option>
                        </select>
                    </div><br></br>
                    <button type="Submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Form