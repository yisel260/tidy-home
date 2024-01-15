
import React,{useState} from 'react'
import NavBar from '../Components/NavBar';
import ItemCard from '../Components/ItemCard';
import SearchForms from '../Components/SearchForms';

function ItemSearch() {

  const [searchResults, setSearchResults]=useState([])

  const [itemSearched,setItemSearched]=useState("")
  const [categorySearched,setCategorySearched]=useState("")
  const [roomSearched,setRoomSearched]=useState("")
  

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
      setItemSearched("")
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
        setCategorySearched("")
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
        setRoomSearched("")

        
      })

    }

        return (
            <>
              <header>
                <h1 text-align= "center"> Tidy Home</h1>
                <NavBar/> 
              </header>
              <main>
                
                <h1>Search for Items</h1>
                <SearchForms 
                handleNameSearch={handleNameSearch}  
                handleCategorySearch={handleCategorySearch}
                handleRoomSearch={handleRoomSearch}

                itemSearched={itemSearched} 
                setItemSearched={setItemSearched}
                categorySearched={categorySearched}
                setCategorySearched={setCategorySearched}
                roomSearched={roomSearched}
                setRoomSearched={setRoomSearched}
                
                />
                
                <div>
                  {searchResults.map(item=>{
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