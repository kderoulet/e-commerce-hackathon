import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Catalogue from '../pages/catalogue'
import Checkout from '../pages/checkout'
import OrderConfirmation from '../pages/order-confirmation'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      order: {},
      search: ""
    }
  }


  // event listeners

  addProduct = (e) => {
    // fetch('/api/addProduct', {
    //   method: 'POST',
    //   headers: new Headers({'Content-Type': 'application/json'}),
    //   body: JSON.stringify({id: e.target.value})
    // }).then(res => res.json()).then((order) => {
    //   this.setState({order})
    // })
    console.log('WDI ROCKS')
  }

  updateSearch = (e) => {
    this.setState({search: e.target.value})
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
        <div className="container">
        <Switch>
          <Route exact path='/' render={() =>
            <Home />
          } />
          <Route exact path="/catalogue" render={() =>
            <Catalogue
              addProduct={this.addProduct}
              updateSearch={this.updateSearch}
              products={this.state.products}
              order={this.state.order}
              search={this.state.search}
              />
          } />
          <Route exact path="/checkout" render={() =>
            <OrderConfirmation/> 
          } />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
