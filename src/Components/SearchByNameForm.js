import React from "react";
import ItemCard from "./ItemCard";



function SearchByNameForm({handleNameSearch}) {

    


  return (
    <div>
      <h3>Search by Name</h3>
      <form onSubmit={(e)=>{handleNameSearch(e)}}>
        <label>
          Item Name:
          <input name="ItemName" id="itemName" value="hammer" />
        </label>
        <button type="submit">search</button>
      </form>
    </div>
  );
}

export default SearchByNameForm;