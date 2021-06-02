import './App.css';
import CentralPanel from './components/application/CentralPanel';
import Footer from './components/application/footer/Footer';
import Header from './components/application/header/Header';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <CentralPanel />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
