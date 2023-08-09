import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./Components/navBar";
import Cart from "./Components/cart";
import ProductList from "./Components/productList";
import products from "./Components/products";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              path="/"
              exact
              render={() => <ProductList products={products} />}
            />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
