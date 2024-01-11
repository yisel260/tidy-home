import react from 'react';

function ItemCard( {itemName, itemLocation, itemRoom}){

    return (
        <div className="ItemCard">
           {itemName}
            {itemLocation}
            {itemRoom }           
        </div>
        )

}

export default ItemCard;