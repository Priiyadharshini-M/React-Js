import React from "react";
import './StyleSheet.css'

let inlinestyles={
    fontSize:'40px',
    color:'blue'
}
function StyleSheet()
{
    return(
        //Regular StyleSheet
        <div><p className={`colour font`}>Red</p>
        {/* //inline css */}
        <p style={inlinestyles}>Blue</p>
        {/* <h1 className={styles.active}>Active</h1> ---> it shows error when normal regular stylesheet while including in child classes doesn't show error */}
        </div>
    )
}
export default StyleSheet