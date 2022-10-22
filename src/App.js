import './App.css';
import Register from './components/Register.js';
import LogIn from './components/LogIn';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import LogOut from './components/LogOut';
import PrivateComponent from './PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/home' element={<Home />} />
            <Route path='/logout' element={<LogOut />} />
          </Route>

          <Route>
            <Route path='/signup' element={<Register />} />
            <Route path='/login' element={<LogIn />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
