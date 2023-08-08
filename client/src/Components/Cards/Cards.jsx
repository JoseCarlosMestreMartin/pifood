import React from "react";
import styles from "./Cards.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
const Cards = ({firstCard, lastCard}) => {
  // const countriesToView= useSelector((state)=>state.countriesToView);
  const allRecipes = useSelector((state) => state.recipes);
  const currentRecipes = allRecipes.slice(firstCard, lastCard);
  return (
    <div className={styles.containerA} >
      {currentRecipes.length ? (
        <div className={styles.container}>
          {currentRecipes?.map((r, index) => {
            return (
              <Card
                key={index}
                id={r.id}
                title={r.title}
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
