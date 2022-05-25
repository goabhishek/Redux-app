import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import productdetails from './containers/productdetails';
// import productComponent from './containers/productComponent';
function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' exact component={ProductListing} />
        <Route path='/product/:productId' exact component={productdetails} />
        {/* <Route path='/' exact component={productComponent} /> */}
      </Routes>
    </div>
  );
}

export default App;
