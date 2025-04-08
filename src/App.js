import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Services from './routes/Services';
import Login from './routes/Login';

export default function App() {
  return (
    
    <div className="App">
      
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
        </Routes>
        
    </div>
  );
}
