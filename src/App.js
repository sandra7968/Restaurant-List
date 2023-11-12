import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import View from './pages/View';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/view/:id' element={<View/>} />
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
