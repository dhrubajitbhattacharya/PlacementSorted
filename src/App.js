import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Home from './pages/home/Home';

function App() {
  return (
    <>

    <BrowserRouter>
    
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
