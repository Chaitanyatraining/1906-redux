import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Movies from './Components/Movies';
import Routing from './Routing/Routing';

function App() {
  return (
    <div className="App">
      <Header />
     <Routing />
      <Footer />
    </div>
  );
}

export default App;
