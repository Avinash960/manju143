import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Task from './components/Task';
import Logout from './components/Logout';
import EditProfile from './components/EditProfile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/editprofile' element={<EditProfile></EditProfile>}></Route>
          <Route path='/task' element={<Task></Task>}></Route>
          <Route path='/logout' element={<Logout></Logout>}></Route>
         </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
