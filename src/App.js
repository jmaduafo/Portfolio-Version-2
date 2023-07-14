import './App.scss';
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
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
