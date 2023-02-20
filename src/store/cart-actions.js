import { cartActions } from "./cart-slice";

export const getCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://meals-backend-react-default-rtdb.firebaseio.com/cartRedux.json"
      );
      const cartData = await response.json();
      console.log(`Fetched cart data`, cartData);
      return cartData;
    };

    try {
      const data = await fetchData();
      if (data === null) {
        throw new Error("Theres no prior data before app initialization");
      }
      dispatch(cartActions.initializeCartData({ cartData: [...data] }));
    } catch (err) {
      console.log(err.message);
    }
  };
};
