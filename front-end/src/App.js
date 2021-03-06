import './App.css';
import Topbar from './Components/Topbar';
import Header from './Components/Header';
import "./Scss/main.scss";
import Footer from './Components/Footer';
import Home from './Layouts/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PetHeart from './Layouts/PetHeart';
import PetFoodPage from './Layouts/PetFoodPage';
import PageHandbook from './Layouts/PageHandbook';
import PageAbout from './Layouts/PageAbout';
import Cart from './Layouts/Cart';
import Register from './Layouts/Register';
import SingIn from './Layouts/SingIn';
import ProductScreen from './Layouts/ProductScreen';
import ShippingAddress from './Layouts/ShippingAddress';
import PaymentPage from './Layouts/PaymentPage';
import PlaceOrder from './Layouts/PlaceOrder';

function App() {

  return (
    <Router>
      <div className="App">
        <Topbar></Topbar>
        <Header></Header>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/pet-heart" component={PetHeart}></Route>
          <Route path="/pet-food" component={PetFoodPage}></Route>
          <Route path="/handbook" component={PageHandbook}></Route>
          <Route path="/about" component={PageAbout}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/cart/:id?" component={Cart}></Route>
          <Route path="/signin" component={SingIn}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/shipping" component={ShippingAddress}></Route>
          <Route path="/payment" component={PaymentPage}></Route>
          <Route path="/placeorder" component={PlaceOrder}></Route>
        </div>
        <Footer></Footer>
      </div>
    </Router>

  );
}

export default App;
