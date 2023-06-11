import Navbar from "./components/Navbar";
import './App.css'
import Intro from "./components/Intro";
import Services from "./components/Services/Services";
import { themeContext } from "./Context";
import { useContext } from "react";
import background1 from './img/computer.png'
import Test from "./components/Test";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{background: darkMode? 'black': '', 
    backgroundImage: darkMode? `linear-gradient(180deg, #0000008c 0%, #0000008c 100%), url(${background1}) `: '', 
    color : darkMode? 'white':'',
    backgroundSize : darkMode? 'cover':'',
    backgroundAttachment : darkMode? 'fixed':''
  
  }}
  
    >

      <Navbar/>
      <Intro/>
      <Services/>
      
      
    
    </div>
  );
}

export default App;
