import React, {Component} from 'react';
import classes from './App.css';
import './App.css';
import Products from '../src/container/products';
import ProductDetail from '../src/component/ProductDetail/ProductDetail';
import AddProduct from './component/AddProduct/AddProduct';
import {Route, Switch, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-offset-2 col-sm-8">
            <nav className="header">

              <ul className="nav nav-pills">
                <li role="presentation">
                  <Link className={classes.header_a} to='/'>Home</Link>
                </li>
                <li role="presentation">
                  <Link className={classes.header_a} to='/create'>CreateProduct</Link>
                </li>
              </ul>

            </nav>
          </div>

        </div>

        <Switch>
          <Route path="/" exact component={Products}/>
          <Route path="/create" exact component={AddProduct}/>
          <Route path="/:id" exact component={ProductDetail}/>

        </Switch>
      </div>
    );
  }
}

export default App;
