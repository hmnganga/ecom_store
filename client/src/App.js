import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import NotFound from './Screens/404';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Login from './Screens/Login';
import OrderNow from './Screens/OrderNow';
import ShippingInfo from './Screens/ShippingInfo';
import Home from './Screens/Home';
import Description from './Screens/Description';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartscreen from './Screens/Cartscreen';
import Register from './Screens/Register';
import Navbartail from './components/Nabartail';
import UpperHeader from './components/UpperHeader';
import Ordersscreen from './Screens/Ordersscreen';
import Orderinfo from './Screens/Orderinfo';
import Profile from './Screens/Profile';
import Adminscreen from './Screens/Adminscreen';
import Userslist from './Screens/Userslist';
import Orderslist from './Screens/Orderslist';
import Addproduct from './Screens/Addproduct';
import Productslist from './Screens/Productslist';
import Editproduct from './Screens/Editproduct';
import thankyou from './Screens/thankyou';

function App() {
  return (
    <Router className='App'>
      <Navbartail />
      <UpperHeader />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        {/* <Route path='/shippingInfo' exact component={ShippingInfo} /> */}
        <Route path='/contact' exact component={Contact} />
        <Route path='/order' exact component={OrderNow} />
        <Route path='/login' exact component={Login} />
        <Route path='/product/:id' exact component={Description} />
        <Route path='/cart' exact component={Cartscreen} />
        <Route path='/register' exact component={Register} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/orders' exact component={Ordersscreen} />
        <Route path='/orderinfo/:orderid' exact component={Orderinfo} />
        <Route path='/admin/' component={Adminscreen} exact />
        <Route path='/thankyou' component={thankyou} exact />
        <div className='row justify-content-center mt-2'>
          <div className='col-md-10'>
            <h2>Admin Panel</h2>
            <ul className='admin p-2'>
              <li>
                <Link to='/admin/userslist' style={{ color: 'black' }}>
                  UsersList
                </Link>
              </li>
              <li>
                <Link to='/admin/productslist' style={{ color: 'black' }}>
                  Products List
                </Link>
              </li>
              <li>
                <Link to='/admin/addnewproduct' style={{ color: 'black' }}>
                  Add New Product
                </Link>
              </li>
              <li>
                <Link to='/admin/orderslist' style={{ color: 'black' }}>
                  Orderslist
                </Link>
              </li>
            </ul>

            <Switch>
              <Route path='/admin/' component={Userslist} exact />
              <Route path='/admin/userslist' component={Userslist} />
              <Route path='/admin/orderslist' component={Orderslist} />
              <Route path='/admin/addnewproduct' component={Addproduct} />
              <Route path='/admin/productslist' component={Productslist} />
              <Route
                path='/admin/editproduct/:productid'
                component={Editproduct}
              />
            </Switch>
          </div>
        </div>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
