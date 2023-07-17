import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch }  from "react-redux";
import { deleteRecipe } from "../../redux/actions";


export default function Card({name, diets, image, id, createdInDb, healthScore}) {
  const dispatch = useDispatch();

    const handleDelete = async (id) => {
        dispatch(deleteRecipe(id));
    };
  return (
    <div className={style.container}>
            <div>
                <Link to={`/detail/${id}`}>
                    <img className={style.recipe_card__image} src={image} alt={name} />
                </Link>
                <h5 className={style.recipe_card__title}>{name}</h5>
                {/* <p>{healthScore}</p> */}
                {diets?.map((d, index) => (
                    <li className={style.recipe_diets} key={index}>{d}</li>
                ))}
                {createdInDb && (
                    <button className={style.delete} onClick={() => handleDelete(id)}>Delete</button>
                )}
            </div>
        </div>
  );
}
