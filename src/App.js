import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';

import cardsImg from './Images/Katie.png'
import reviewImg from './Images/Review.png'


function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <div className='card-set'>
            <Cards className="cards-space" img={cardsImg} rating="5" review_img={reviewImg} title="Hello" reviewPoint='10' country="India"  price="100"/>
            <Cards className="cards-space" img={cardsImg} rating="5" review_img={reviewImg} title="Hello" reviewPoint='10' country="India"  price="100"/>
        </div>
    </div>
  );
}

export default App;
