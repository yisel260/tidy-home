import React from "react";
import ItemCard from "./ItemCard";



function SearchByNameForm(props) {



    function handleNameSearch(event) {
        event.preventDefault();
        console.log(event)

        fetch('http://localhost:3000/items')
        .then(res => res.json())
       .then(itemsInfo => { 
        itemsInfo.forEach(item => {
          if(item.name === event.target.value ){
            return (
                <ItemCard />
            )
          }})
        })
    }

        



  return (
    <div>
      <h3>Search by Name</h3>
      <form onSubmit={handleNameSearch}>
        <label>
          Item Name:
          <input value={props.name} onChange={props.handleNameChange} />
        </label>
        <button type="submit">search</button>
      </form>
    </div>
  );
}

export default SearchByNameForm;