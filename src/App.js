import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
// import OtherPage from './OtherPage'; // Import other pages as needed
import Login from './Login';

function App() {
  return (
    <div className="App bg-gray-800">
       <Navbar />
       <BrowserRouter>
    <Routes>
     
        <Route path="/" element={<Home/>} />
        {/* Add more routes for other pages */}
        <Route path="/login" element={<Login/>} />
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
