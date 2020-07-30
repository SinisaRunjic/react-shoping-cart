import React from 'react';
import data from './data.json';
import Product from './components/Product';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    return (
      <div className='grid-content'>
        <header>
          <a href="/">React shoping CART</a>
        </header>
        <main>
          <div className='content'>
            <div className='main'>
              <Product products={this.state.products}> </Product>
            </div>
            <div className='sidebar'>
              Cart Items
            </div>
          </div>
        </main>
        <footer>
          All rights reserved
      </footer>
      </div>
    );
  }
}

export default App;
