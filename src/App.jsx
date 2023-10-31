import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import SingleProduct from "./components/Singleproduct";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className=" md:w-4/5 mx-auto bg-slate-100   font-titleFont">
    <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
