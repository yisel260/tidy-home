
import React from 'react'
import NavBar from '../Components/NavBar';
import ItemCard from '../Components/ItemCard';

function ItemSearch() {
        return (
            <>
              <header>
                <NavBar/> 
              </header>
              <main>
                <h1>search for items</h1>
                <ItemCard/>
              </main>
            </>
          );
        };
        
        export default ItemSearch;