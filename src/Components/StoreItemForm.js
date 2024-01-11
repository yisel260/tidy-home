import React from "react";

function StoreItemForm(){

return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
    <label>
      Name:
      <input type="text" name="name" onChange={ handleChangeName}/>
    </label>

    <label>
      Category:
      <select name="category"  onChange={handleChangeCategory}>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </label>

    <button type="submit">Add to List</button>
  </form>
)
}

export default StoreItemForm 