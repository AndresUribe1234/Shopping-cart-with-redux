import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "./../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const addCartHandler = () => {
    dispatch(
      cartActions.addToCart({ newItem: { id, title, price, amount: 1 } })
    );
  };
  const removeCartHandler = () => {
    dispatch(
      cartActions.removeFromCart({ newItem: { id, title, price, amount: 1 } })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartHandler}>-</button>
          <button onClick={addCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
