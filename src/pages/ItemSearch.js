
import React,{useState} from 'react'
import NavBar from '../Components/NavBar';
import ItemCard from '../Components/ItemCard';
import SearchByNameForm from '../Components/SearchByNameForm';

function ItemSearch() {

  const [searchResults, setSearchResults]=useState([])

  //Search By Name 

  function handleNameSearch(event) {
    event.preventDefault();
   const  searchedItem = event.target.elements.ItemName.value

    fetch('http://localhost:3000/items')
    .then(res => res.json())
   .then(itemsInfo => {
    const searchByNameResults = []
    itemsInfo.forEach(item => {
      if(item.name === searchedItem ){
        searchByNameResults.push(item)
        console.log(searchByNameResults)
      }})

      console.log(searchByNameResults)

      setSearchResults(searchByNameResults)
    })
  }


    //Search by category

    function handleCategorySearch(event) {
      event.preventDefault();
     const  searchedCategory = event.target.elements.ItemCategory.value
  
      fetch('http://localhost:3000/items')
      .then(res => res.json())
     .then(itemsInfo => {
      const searchByCategoryResults = []
      itemsInfo.forEach(item => {
        if(item.category === searchedCategory ){
          searchByCategoryResults.push(item)
          console.log(searchByCategoryResults)
        }})
  
        console.log(searchByCategoryResults)
  
        setSearchResults(searchByCategoryResults)
      })
    }



    //Search by Room 

    function handleRoomSearch(event) {
      event.preventDefault();
     const  searchedRoom = event.target.elements.ItemRoom.value
  
      fetch('http://localhost:3000/items')
      .then(res => res.json())
     .then(itemsInfo => {
      const searchByRoomResults = []
      itemsInfo.forEach(item => {
        if(item.room === searchedRoom ){
          searchByRoomResults.push(item)
          console.log(searchByRoomResults)
        }})
  
        console.log(searchByRoomResults)
  
        setSearchResults(searchByRoomResults)
      })
    }

        return (
            <>
              <header>
                <NavBar/> 
              </header>
              <main>
                
                <h1>search for items</h1>
                <SearchByNameForm 
                handleNameSearch={handleNameSearch}  
                handleCategorySearch={handleCategorySearch}
                handleRoomSearch={handleRoomSearch}
                />
                
                <div>
                  {searchResults.map(item=>{
                    return(
                    <ItemCard 
                      itemName={item.name} 
                      itemLocation={item.location} 
                      itemRoom={item.room} item
                      key={item.id}/>
                  )})}
                </div>
              </main>
            </>
          );
        };
        
        export default ItemSearch;