import './css/App.css';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
