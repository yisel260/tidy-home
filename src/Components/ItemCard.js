import react from 'react';

function ItemCard( {itemName, itemLocation, itemRoom, itemCategory}){

    return (
        <div className="ItemCard">
            
           Item Name: {itemName}<br />
           Item Room: {itemRoom } <br />
           Item Location: {itemLocation}<br />
           Item Category: {itemCategory}  <br />    
        
        </div>

        )

}

export default ItemCard;