import { useState} from 'react';
import './App.scss';
import MainPreloader from './components/MainPreloader/MainPreloader';
import Container from './components/Container/Container';



function App() {
  const [preloader, setPreloader] = useState(true)

  return (
    <div className="container">
      {preloader ? <MainPreloader preloader={preloader} setPreloader={setPreloader}/> : <Container/>}
    </div>
  );
}

export default App;
