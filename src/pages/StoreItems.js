
import React, {useState} from 'react'
import NavBar from '../Components/NavBar';
import StoreItemForm from '../Components/StoreItemForm';

function ItemSearch() {

  const [newItemName, setNewItemName] = useState("")
  const [newItemCategory, setNewItemCategory] = useState("")
  const [newItemRoom, setNewItemRoom] = useState("")
  const [newItemLocation, setNewItemLocation] = useState("")

  // function resetForm(){
  //   console.log("Resetting form...")
  //   setNewItemCategory("")
  //   setNewItemName("")
  //   setNewItemRoom("")
  //   setNewItemLocation("")
    
  // }

  function handleStoreItem(e){

    e.preventDefault();


    const newItemData = {
      name: newItemName,
      location: newItemLocation,
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
    .then(() => {

      setNewItemCategory("");
      setNewItemName("");
      setNewItemRoom("");
      setNewItemLocation("");

      // setNewItemCategory(newItemData.category);
      // setNewItemName(newItemData.name);
      // setNewItemRoom(newItemData.room);
      // setNewItemLocation(newItemData.location);
      // resetForm(); // Move this line inside the .then() block
    });
}

   
        return (
            <>
              <header>
              <h1 text-align= "center"> Tidy Home</h1>
                <NavBar/> 
              </header>
              <main>
                <h1>Store Items here !</h1>
                <StoreItemForm 
                handleStoreItem={handleStoreItem}

                newItemName={newItemName}
                setNewItemName={setNewItemName}

                newItemCategory={newItemCategory}
                setNewItemCategory={setNewItemCategory}

                newItemRoom={newItemRoom}
                setNewItemRoom={setNewItemRoom}

                setNewItemLocation={setNewItemLocation}
                newItemLocation={newItemLocation}
                />
              </main>
            </>
          );
        };
        
        export default ItemSearch;