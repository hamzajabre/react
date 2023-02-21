import logo from '../assets/logo.svg';
import '../styles/App.css';
import Welcome from './hello';
import CounterButton from './counter';
import Compteur from './compteur';
import Personne from './personne';
// import Contacts from './contacts';
import Timer from './timer';
import CompteurHook from './compteur-hook';
import Button from './toggle-hook';
import PersonneHook from './personne-hook';
import Fruits from './fruits-hook';
//import Garage from './garage';
//import Voiture from './voiture';
import Color from './useEffect';
//import BesoinsCaloriques from './besoin-calorique';
import ContactList from './contacts-hook';
//import UserList from './list1';
//import UserProvider from './list1';
//import UserListDisplay from './list3';
//import UserPhoneDisplay from './list4';
import Dark from './dark';
import LineChart2 from './Data2';


import BarChart from './chart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);













function App() {
  
  return (
    
    <div className="App">
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        {/*<BesoinsCaloriques/>*/}
      </header>
        
        {/*<Dark/>*/}
        <Welcome name='hamza'/>
        <Dark/>
        {/*<DarkMode/>*/}
        <Timer/> 
        <CounterButton/>
        <Compteur/>
        <Personne/>
        {/* <Contacts/> */}
        <CompteurHook/>
        <PersonneHook/>
        <Button/>
        <Fruits/>
        <ContactList/>
        {/*<Garage/>*/}
        {/*<Voiture/>*/}
        <Color/>
        {/*<UserList/>*/}
        {/*<UserProvider/>*/}
        {/*<UserListDisplay/>*/}
        {/*<UserPhoneDisplay/>*/}
        
          <BarChart/>
          <LineChart2/>
        
        
       
        
        
        
       
      
       
    </div>
  );
}

export default App;
