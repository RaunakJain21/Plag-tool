import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
// import OtherPage from './OtherPage'; // Import other pages as needed
import Login from './Login';
import Signup from './Signup';  
import PlagiarismCheckPage from './PlagiarismCheckPage';
import PlagCheck from './Plagcheck';

function App() {
  return (
    <div className="App bg-gray-800 w-full">
    <Navbar/>
       <BrowserRouter>

<Routes>
 
    <Route path="/" element={<Home/>} />
    {/* Add more routes for other pages */}
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/plag" element={<PlagiarismCheckPage/>} />
    <Route path='/code' element={<PlagCheck/>}></Route>
  
</Routes>
</BrowserRouter>

  
    </div>
  );
}

export default App;
