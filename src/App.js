import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1>Welcome to Eden Trek</h1>
          <p>Your one-stop solution for planning your next adventure!</p>
        </header>
      </div>
    </Router>
  );
}
