import React from "react";
import UseContextA from "./UseContextA";

export const Name=React.createContext()
export const Clg=React.createContext()

function UseContext(){
    return(
        <div>
            <Name.Provider value={"Priiya"}> {/*//provide value to context */}
                <Clg.Provider value={"SKCET"}>
                <UseContextA />
                </Clg.Provider>
            </Name.Provider>
        </div>
    )
}
export default UseContext