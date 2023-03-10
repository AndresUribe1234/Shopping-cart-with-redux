import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartVisualization = useSelector(
    (state) => state.cart.cartVisualizationStatus
  );
  const cart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    const sendCartData = async () => {
      const apiCallOptions = {
        method: "PUT",
        body: JSON.stringify(cart),
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        "https://meals-backend-react-default-rtdb.firebaseio.com/cartRedux.json",
        apiCallOptions
      );

      const responseData = await response.json();

      if (response.ok) {
        console.log("success!");
        console.log(responseData);
      }
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((err) => console.log(err));
  }, [cart, dispatch]);

  return (
    <Layout>
      {cartVisualization && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
