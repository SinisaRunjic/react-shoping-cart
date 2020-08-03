import React from 'react';
import Product from './components/Product';
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
  
  createOrder = (order) => {
    alert("need to same" + order.name)
  }
  render() {
    return (
      <Provider store={store}>
        <div className='grid-content'>
          <header>
            <a href="/">React shoping CART</a>
          </header>
          <main>
            <div className='content'>
              <div className='main'>
                <Filter />
                <Product>
                </Product>
              </div>
              <div className='sidebar'>
                <Cart/>
              </div>
            </div>
          </main>
          <footer>
            All rights reserved
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
