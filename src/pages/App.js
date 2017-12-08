import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from '../components/Navbar'
import Catalogue from '../pages/catalogue'
import Checkout from '../pages/checkout'
import OrderConfirmation from '../pages/order-confirmation'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      order: {}
    }
  }

  // Lifecycle methods

  componentDidMount() {
    let findProducts = fetch('/api/products').then(res => res.json())
    let findOrder = fetch('/api/order').then(res => res.json())
    Promise.all([findOrder, findProducts]).then((data) => {
      this.setState({
        order: data[0],
        products: data[1]
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() =>
            <div/>
          } />
          <Route exact path="/catalogue" render={() =>
            <Catalogue/>
          } />
          <Route exact path="/checkout" render={() =>
            <OrderConfirmation/> 
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
