import React, {useState} from "react";

function StoreItemForm(){

    const [newItemName, setNewItemName] = useState("")
    const [newItemCategory, setNewItemCategory] = useState("")
    const [newItemRoom, setNewItemRoom] = useState("")
    

function handleStoreItem(e){

        e.preventDefault();

        const newItemData = {
          name: newItemName,
          category: newItemCategory,
          room: newItemRoom,
        };

        fetch("http://localhost:3000/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItemData),
        })
          .then((r) => r.json())
          .then((newItemData) => {
            setNewItemCategory(newItemData.category);
            setNewItemName(newItemData.name);
            setNewItemRoom(newItemData.room);
          });
      }


return (

    <form id="store-item"   onSubmit={handleStoreItem}> 
      <label> Item name:</label>
      <input type="text" id="item-name" name = "item-name" required onChange={e=>setNewItemName(e.target.value)}/> <br/>

      <label> Room:</label>
      <input type="text" id="item-room" name = "item-room" required/> <br/>

      <label > Location description:</label>
      <input type="text" id="item-location" name = "item-location" required  onChange={e=>setNewItemCategory(e.target.value)}/> <br/>

      
      <label > Category:</label>
      <input type="text" id="item-category" name = "item-category" required   onChange={e=>setNewItemRoom(e.target.value)}/><br/>

      <input type="submit" value="submit" className = "button" id="submitItem"/>
     </form>
     );
}

export default StoreItemForm 