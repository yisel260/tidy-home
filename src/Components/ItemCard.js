import react from 'react';

function ItemCard( {itemName, itemLocation,room}){

    return (
        <div className="ItemCard">
           {itemName}
            {itemLocation}
            {room }           
        </div>
        )

}

export default ItemCard;