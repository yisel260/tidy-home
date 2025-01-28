
import React from 'react'
import NavBar from '../Components/NavBar';
import "./pages.css";
import TestForm from '../Components/TestForm';

function Home() {
        return (
            <>
             
              <header>
              <h1 text-align= "center"> Tidy Home</h1>
                <NavBar/> 
              </header>
              <main>
                <h2>Home!</h2>

                
                <div className='paragraph'>
                  <p>Have you ever put somethig safely away, only to forget where you put it when you need it?
                   Are you tired of your family members asking you where things are all the time?
                  <br/><br/>
                  You carefully arranged gradma's heirloom Christmas decor in a box and put said box in one of many storage places in your home.
                  Then, a year later, when you are looking for them, you vaguely remember putting them in a beatiful decorated 
                  box, but not if the box is in the attic, the garage, or one of the many closets in the house.<br/><br/>
                  Your husband is looking for the wine opener in the kitchen.... again. 
                  He needs you to remind him where it is stored for the 100th time.
                  <br/><br/>

                   Never lose an item again! Simply store on the data base for retrival when you need it!
                  </p>
                  <h3>Comming soon: </h3>
                  <ul>
                    <li> Login feature to keep each user's information separate and up to date</li>
                    <li>  Hability to Update and items location after it is searched</li>
                    <li> Hability to upload pictures of items as you "store them"</li>
                    <li> Chore calendar with hability to schedule chores and organizing tasks</li>
                    <li>  Family/House hold featrures</li>
                         <ul>
                         <li> Set up family account to link  accounts of family members </li>
                         <li>Send messages to family asking them to update the location of an item if they moved it.</li>
                         <li>Assign  Chores from chore list to  each family member</li>
                         </ul>

                   </ul>

                  </div>

                  

              </main>
            </>
          );
        };
        
        export default Home; 