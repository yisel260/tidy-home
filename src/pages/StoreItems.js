
import React, {useState} from 'react'
import NavBar from '../Components/NavBar';
import StoreItemForm from '../Components/StoreItemForm';
import ItemCard from '../Components/ItemCard';

function ItemSearch() {

  const [newItemName, setNewItemName] = useState("")
  const [newItemCategory, setNewItemCategory] = useState("")
  const [newItemRoom, setNewItemRoom] = useState("")
  const [newItemLocation, setNewItemLocation] = useState("")
  const [addedItem,setItemAdded]=useState([])

  const newItemData = {
    name: newItemName,
    location: newItemLocation,
    category: newItemCategory,
    room: newItemRoom,
  };

  
  function handleStoreItem(e){

    e.preventDefault();

    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItemData),
    })
    .then((r) => r.json())
    .then((newItemData) => {
      console.log(addedItem)
      setItemAdded([...addedItem, newItemData])
      console.log(addedItem)
      setNewItemCategory("");
      setNewItemName("");
      setNewItemRoom("");
      setNewItemLocation("");

    
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
                
                <div>
                  <h2>Items Added:</h2>
                  {addedItem.map(item=>{
                    
                    return(
                    
                    <ItemCard 
                      itemName={item.name} 
                      itemLocation={item.location} 
                      itemRoom={item.room} 
                      itemCategory={item.category} 
                      key={item.id}/>
                  )})}
                  </div>

                
              </main>
            </>
          );
        };
        
        export default ItemSearch;