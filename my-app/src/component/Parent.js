import React, {Component} from 'react'
import Child from './Child'
class Parent extends Component
{
    constructor()
    {
        super()
        this.state={
            parentName:'Priiya'
        }
        this.click=this.click.bind(this)
    }
    click(childName)
    {
        alert("Hello "+this.state.parentName+" from "+childName)
    }
    render()
    {
        return(<div>
            {/* pass method as prop */}
        <Child eventhandler={this.click} />
        </div>)
    }
}
export default Parent