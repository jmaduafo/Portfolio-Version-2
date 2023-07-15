import './App.scss';
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Works from './pages/Works/Works';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="container">
      <Header/>
      <main>
        <Home/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
