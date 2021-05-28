import './App.css';
import CentralPanel from './components/application/CentralPanel';
import Footer from './components/application/footer/Footer';
import Header from './components/application/header/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <CentralPanel />
      <Footer />
    </div>
  );
}

export default App;
