
import React,{useState} from 'react'
import NavBar from '../Components/NavBar';
import ItemCard from '../Components/ItemCard';
import SearchByNameForm from '../Components/SearchByNameForm';

function ItemSearch() {

  const [searchResults, setSearchResults]=useState([])



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

        return (
            <>
              <header>
                <NavBar/> 
              </header>
              <main>
                <div>
                <h1>search for items</h1>
                <SearchByNameForm handleNameSearch={handleNameSearch} />
                </div>
               
                <div>
                  {searchResults.map(item=>{
                    return(
                    <ItemCard itemName={item.name} itemLocation={item.location} itemRoom={item.room} item/>
                  )})}
                </div>
              </main>
            </>
          );
        };
        
        export default ItemSearch;