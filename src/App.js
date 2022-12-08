
import './App.css';
import Main from './Components/Maindash/Main';
import RightSide from './Components/Rightside/RightSide';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <div className="appGlass">
       <Sidebar/>
       <Main/>  
       <RightSide/>
    </div>
    </div>

  );
}

export default App;
