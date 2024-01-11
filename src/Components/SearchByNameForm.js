import React, {useState} from "react";
import ItemCard from "./ItemCard";



function SearchByNameForm({handleNameSearch}) {

    const [itemSearched,setItemSearched]=useState("")

    


  return (
    <div>
      <h3>Search by Name</h3>
      <form onSubmit={(e)=>{handleNameSearch(e)}}>
        <label>
          Item Name:
          <input name="ItemName" id="itemName" value={itemSearched}   onChange={e=>setItemSearched(e.target.value)}/>
        </label>
        <button type="submit">search</button>
      </form>
    </div>
  );
}

export default SearchByNameForm;