import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "./../../store/cart-slice";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const numberCartItems = useSelector((state) => state.cart.cartItems);

  const showCartHandler = () => {
    dispatch(cartActions.changeVisualization());
  };

  const renderNumItems = numberCartItems.reduce(
    (acum, ele) => acum + Number(ele.amount),
    0
  );

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{renderNumItems}</span>
    </button>
  );
};

export default CartButton;
