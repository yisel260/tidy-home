
import React from 'react'
import NavBar from '../Components/NavBar';
import ItemCard from '../Components/ItemCard';
import SearchByNameForm from '../Components/SearchByNameForm';

function ItemSearch() {
        return (
            <>
              <header>
                <NavBar/> 
              </header>
              <main>
                <h1>search for items</h1>
                <SearchByNameForm/>
                <ItemCard/>
              </main>
            </>
          );
        };
        
        export default ItemSearch;