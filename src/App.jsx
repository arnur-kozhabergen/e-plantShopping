import { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';
export default function App() {
  const [showProductList, setShowProductList] = useState(false);
  if (showProductList) return <ProductList onHomeClick={() => setShowProductList(false)} />;
  return <main className="landing-page">
    <div className="background-image" aria-hidden="true" />
    <div className="landing-content">
      <div className="brand">PN <span>Paradise Nursery</span></div>
      <div className="landing-grid"><section className="landing-intro">
        <p className="eyebrow">Where green meets serenity</p>
        <h1>Make room<br/>for <em>something green.</em></h1>
        <p>Good things grow here. Find a new leaf for your favorite space.</p>
        <button className="primary-button light" onClick={() => setShowProductList(true)}>Get Started <span aria-hidden="true">↗</span></button>
      </section><AboutUs /></div>
      <footer>Paradise Nursery · A growing collection of small joys</footer>
    </div>
  </main>;
}
