import './App.scss';
import Header from './components/Header';
import Rent from './components/Rent';
import Photos from './components/Photos';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Rent />
      <Photos />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
