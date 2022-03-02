import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

const Home = React.lazy(() => import("../pages/home"));
const Cart = React.lazy(() => import("../pages/cart"));
const Payment = React.lazy(() => import("../pages/payment"));
const ProductDetail = React.lazy(() => import("../pages/productDetail"));

const Search = React.lazy(() => import("../pages/search"));

const Routes = ({ loading }: any) => {
  return (
    <div>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />
        <Route path="/products/:productId" exact component={ProductDetail} />
        <Route path="/search" component={Search} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default Routes;
