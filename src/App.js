

import Navigation from './Components/Navigation';
import Home from './Components/Home';
import ProductsSection from './Components/ProductsSection';
import './App.css';


function App() {
  return (
    <div className = 'font-sans leading-6 min-h-screen'>
      <Navigation />
      <Home />
      <ProductsSection />
    </div>
  );
}

export default App;
