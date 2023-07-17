import React from "react";
import styles from "./Cards.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
const Cards = () => {
  // const countriesToView= useSelector((state)=>state.countriesToView);
  const allRecipes = useSelector((state) => state.recipes);
  const currentRecipes = allRecipes.slice(0, 8);
  return (
    <div className={styles.container}>
      {currentRecipes.length ? (
        <div>
          {currentRecipes?.map((r, index) => {
            return (
              <Card
                key={index}
                id={r.id}
                name={r.name}
                image={r.image}
                diets={r.diets}
                healthScore={r.healthScore}
                createdInDb={r.createdInDb}
              />
            );
          })}
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default Cards;
