import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="PlayStation 5"
          price={499}
          description="Get the next PlayStation from PlayStation."
          id="1"
        />
        <ProductItem
          title="Nintendo Switch"
          price={344}
          description="Nintendo Switch is designed to fit your life, transforming from home console to portable system in a snap."
          id="2"
        />
      </ul>
    </section>
  );
};

export default Products;
