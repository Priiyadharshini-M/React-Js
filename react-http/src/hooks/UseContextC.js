import React from "react";
import {Clg, Name} from "./UseContext";

function UseContextC()
{
    return(
        <div>
            <Name.Consumer>
                {user=>{
                    return(
                      <Clg.Consumer>
                        {
                            clgname=>{
                                return <div>Name context value - {user} from college {clgname}</div>
                            }
                        }
                        </Clg.Consumer>
                    )
                }}
            </Name.Consumer>
        </div>
    )
}
export default UseContextC

//without using useContext() it is very difficult to understand if it is nested like this. So use useContext as like in UseContextB.js