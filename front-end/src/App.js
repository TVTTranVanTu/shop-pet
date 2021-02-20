import './App.css';
import Topbar from './Components/Topbar';
import Header from './Components/Header';
import "./Scss/main.scss";
import Footer from './Components/Footer';
import Home from './Layouts/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PetHeart from './Layouts/PetHeart';
import PetFood from './Layouts/PetFood';
import PageHandbook from './Layouts/PageHandbook';
import PageAbout from './Layouts/PageAbout';
import Cart from './Layouts/Cart';
import Register from './Layouts/Register';
import SingIn from './Layouts/SingIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar></Topbar>
        <Header></Header>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/pet-heart" component={PetHeart}></Route>
          <Route path="/pet-food" component={PetFood}></Route>
          <Route path="/handbook" component={PageHandbook}></Route>
          <Route path="/about" component={PageAbout}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/sign-in" component={SingIn}></Route>
          <Route path="/register" component={Register}></Route>

        </div>
        <Footer></Footer>
      </div>
    </Router>

  );
}

export default App;