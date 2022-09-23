import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsDetails from './components/CardsDetails';
// https://www.youtube.com/watch?v=ym3aaodVQIU
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Cardsdata from './components/CardsData';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/cart' element={<CardsDetails />} />
        {/* <Route path='/' element={<Cardsdata />} /> */}
        <Route path='/' element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
