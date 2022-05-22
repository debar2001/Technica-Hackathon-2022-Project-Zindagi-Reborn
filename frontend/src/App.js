import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './components/pages/LogIn';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import Posts from './components/pages/Posts';


function App() {
  return (
  <div className='main' style={{backgroundColor: "#d8d8d8"}}>
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/login" element={ <LogIn /> } />
        <Route exact path="/signup" element={ <SignUp /> } />
        <Route exact path="/profile" element={ <Profile /> } />
        <Route exact path="/posts" element={ <Posts /> } />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
