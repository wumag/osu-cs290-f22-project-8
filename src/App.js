import './App.css';
import React from 'react';
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'
import RegistrationPage from './pages/RegistrationPage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/order" element={ <OrderPage />}></Route>
            <Route path="/registration" element={ <RegistrationPage />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
