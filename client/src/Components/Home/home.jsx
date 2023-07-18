import React from "react";
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";
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
      <Pagination cantCardPerPage="8"  cantAllCards="200"  page="3" />
    </div>
  );
};

export default Home;
