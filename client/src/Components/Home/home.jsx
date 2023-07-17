import React from "react";
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import Paginated from "../Paginated/Paginated";
import Cards from "../Cards/Cards";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
    dispatch(getRecipes());
    
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <NavBar />
      <h1>este es el Home</h1>
      <Cards />
      <Paginated />
    </div>
  );
};

export default Home;
