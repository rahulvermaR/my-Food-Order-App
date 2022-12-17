import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/crt-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
export default function HeaderCartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const noOfItems = items.reduce((currNumb, item) => {
    return currNumb + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onclick}>
      <span className={classes["icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfItems}</span>
    </button>
  );
}
