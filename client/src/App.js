import "./App.css";
import { DBMS, Navbar, OS } from "./components/import";
import {
  DSAFlow,
  Home,
  LinkedList,
  Profile,
  Quiz,
  StackGame,
} from "./pages/import";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn="no"/>
        <Routes>
            <Route path='/' element={<Home/>}/>
           <Route path='/DSAFlow' element={<DSAFlow/>}/>
           <Route path='/StackGame' element={<StackGame/>}/>
           <Route path='/LinkedList' element={<LinkedList/>}/>
           <Route path='/Profile' element={<Profile/>} />
           <Route path='/Quiz' element={<Quiz/>}/>
           <Route path='/dbms' element={<DBMS/>}/>
           <Route path='/os' element={<OS/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
