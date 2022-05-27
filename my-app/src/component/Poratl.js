import React from "react";
import ReactDOM from "react-dom";
function Portal()
{
    return ReactDOM.createPortal(
        <h3> About Portal</h3>,document.getElementById('portal-root')
    )
}
export default Portal