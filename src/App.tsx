import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Photos from './components/Photos';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="spacer-container"></div>
      <Photos />
      <Footer />
    </div>
  );
}

export default App;
