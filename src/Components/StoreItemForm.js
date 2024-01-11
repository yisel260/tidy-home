import React from "react";

function StoreItemForm(){

return (

    <form id="store-item"> 
      <label for="item-name"> Item name:</label>
      <input type="text" id="item-name" name = "item-name" required/> <br/>
      <label for="room"> Room:</label>
      <input type="text" id="item-room" name = "item-room" required/> <br/>

      <label for="location"> Location description:</label>
      <input type="text" id="item-location" name = "item-location" required/> <br/>

      
      <label for="item-category"> Category:</label>
      <input type="text" id="item-category" name = "item-category" required /><br/>

      <input type="submit" value="submit" class = "button" id="submitItem"/>
     </form>
     );
}

export default StoreItemForm 