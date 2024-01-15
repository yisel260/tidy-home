import React from "react";

function StoreItemForm({
  
  newItemName,
  setNewItemName,
  
  newItemCategory,
  setNewItemCategory,

  newItemLocation,
  setNewItemLocation,

  setNewItemRoom,
  newItemRoom,
  
  handleStoreItem})

  {


return (

    <form id="store-item"   onSubmit={handleStoreItem}> 
      <label> Item name:</label>
      <input type="text" id="item-name" value={newItemName} name = "item-name" required onChange={e=>setNewItemName(e.target.value)}/> <br/>

      <label> Room:</label>
      <input type="text" id="item-room" value={newItemRoom} name = "item-room" required  onChange={e=>setNewItemRoom(e.target.value)}/> <br/>

      <label > Location description:</label>
      <input type="text" id="item-location" value={newItemLocation}name = "item-location" required  onChange={e=>setNewItemLocation(e.target.value)}/> <br/>

      
      <label > Category:</label>
      <input type="text" id="item-category" value={newItemCategory} name = "item-category" required   onChange={e=>setNewItemCategory(e.target.value)}/><br/>

      <input type="submit" value="submit" className = "button" id="submitItem"/>
     </form>
     );
}

export default StoreItemForm 