import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvilavleMeals.module.css";
import MealItem from "./MealItem/MealItem";

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [httpError, setHttpError] = useState();
  useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        "https://react-http-f2ec1-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json"
      );

      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const resData = await res.json();
      const loadedMels = [];

      for (const key in resData) {
        loadedMels.push({
          id: key,
          name: resData[key].name,
          description: resData[key].description,
          price: resData[key].price,
        });
      }
      setMeals(loadedMels);
      setIsloading(false);
    };

    fetchMeals().catch((err) => {
      isloading(false);
      setHttpError(err.message);
    });
  });

  if (isloading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading ...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => {
    return (
      <Card key={meal.id}>
        <MealItem
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      </Card>
    );
  });
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
}
