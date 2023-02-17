import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const cartVisualization = useSelector(
    (state) => state.cart.cartVisualizationStatus
  );
  return (
    <Layout>
      {cartVisualization && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
