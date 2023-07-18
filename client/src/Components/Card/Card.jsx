import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../redux/actions";

export default function Card({
  title = "NN",
  diets,
  image,
  id,
  createdInDb,
  healthScore,
}) {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    dispatch(deleteRecipe(id));
  };
  return (
    <div className={style.container}>
      
        <Link className= {style.linkTo} to={`/detail/${id}`} >
          <img className={style.img} src={image} alt={title} />
        </Link>
        <h5>Title: {title}</h5>
        <h5>healthScore: {healthScore}</h5>
        <h5>Diets: </h5>
        {diets?.map((d, index) => (
          <li className={style.recipe_diets} key={index}>
            {d}
          </li>
        ))}
        {/* {createdInDb && (
          <button className={style.delete} onClick={() => handleDelete(id)}>
            Delete
          </button>
        )} */}
         {true && (
          <button className={style.delete} onClick={() => handleDelete(id)}>
            X
          </button>
        )}
       
      
    </div>
  );
}
