import React from "react";

function StoreItemForm(){

return (

    <form id="store-item"> 
      <label> Item name:</label>
      <input type="text" id="item-name" name = "item-name" required/> <br/>

      <label> Room:</label>
      <input type="text" id="item-room" name = "item-room" required/> <br/>

      <label > Location description:</label>
      <input type="text" id="item-location" name = "item-location" required/> <br/>

      
      <label > Category:</label>
      <input type="text" id="item-category" name = "item-category" required /><br/>

      <input type="submit" value="submit" className = "button" id="submitItem"/>
     </form>
     );
}

export default StoreItemForm 