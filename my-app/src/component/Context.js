import React from "react";
const Context=React.createContext("Rahul") //default value as Rahul while creating context when value not provided
const ContextProvider=Context.Provider
const ContextConsumer=Context.Consumer

export {ContextProvider,ContextConsumer}
export default Context