import react from 'react';
import  '../pages/pages.css';

function ItemCard( {itemName, itemLocation, itemRoom, itemCategory}){

    return (
        <div  className="itemCard">
            
           <h4 className='itemTitle'>{itemName.toUpperCase()}</h4>
           <strong/>Room<strong/>: {itemRoom } <br />
           <p>Location: {itemLocation}</p>
           <p>Category: {itemCategory}  </p>  
        
        </div>

        )

}

export default ItemCard;