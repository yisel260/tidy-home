import React from "react";

function handleNameSearch(event) {
  event.preventDefault();
  console.log("I submitted something");
}

function SearchByNameForm(props) {
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