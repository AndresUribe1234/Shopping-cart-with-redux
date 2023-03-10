import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItemsArray = useSelector((state) => state.cart.cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItemsArray.map((ele) => (
          <CartItem
            item={{
              title: ele.title,
              quantity: ele.amount,
              total: ele.amount * ele.price,
              price: ele.price,
              id: ele.id,
            }}
            key={Math.random()}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
