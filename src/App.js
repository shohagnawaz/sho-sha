import './App.css';
import Header from './Components/Header';
import Shop from './Components/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import Notfound from './Components/Notfound/Notfound';
import ProductDetial from './Components/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">            
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">  
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetial></ProductDetial>
          </Route>
          <Router path="*">
            <Notfound></Notfound>
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
