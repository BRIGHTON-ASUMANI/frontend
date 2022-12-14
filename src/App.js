import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';



function App() {

  return (
    <Router>
     <Header/>
     <main className='py-3'>
        <Container>
        <Routes>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          </Routes>
         <HomeScreen/>
        </Container>
     </main>
     <Footer/>
    </Router>
  );
}

export default App;
