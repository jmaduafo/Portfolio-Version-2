import { useState, useEffect } from 'react';
import './App.scss';
import MainPreloader from './components/MainPreloader/MainPreloader';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';



function App() {
  const [preloader, setPreloader] = useState(true)
  const [count, setCount] = useState(3);

  return (
    <div className="container">
      {preloader ? <MainPreloader preloader={preloader} setPreloader={setPreloader}/> : <Container/>}
    </div>
  );
}

export default App;
