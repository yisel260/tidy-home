import logo from './logo.svg';
import './App.css';
import NavBar from '../NavBar';

function App() {
  return (
    <div className="app">
    {/* Add conditional rendering so users have to be logged in to see pages on the site */}
          <NavBar />
      
        </div>
      );
    };
    
    export default App;
