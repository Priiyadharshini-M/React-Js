import React from 'react';
 function Title()
 {
     console.log("Rendering title")
     return(
         <h3>
             UseCallback 
         </h3>
     )
 }
 export default React.memo(Title)