import React from "react";

import mealsImage from "../../assets/meal-3.jpg";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>GoodMeals</h1>
        <HeaderCartButton onclick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A Table full of delicius food" />
      </div>
    </>
  );
}
