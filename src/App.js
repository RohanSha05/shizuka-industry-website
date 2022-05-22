import './App.css';
import Home from './components/Pages/Home/Home';
import Footer from './components/Pages/Shared/Footer/Footer';
import Navbar from './components/Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
