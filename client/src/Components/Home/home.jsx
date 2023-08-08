import React from "react";
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
import Pagination2 from "../paginate2/Pagination2";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cantCardPerPage, setCantCardPerPage] = useState(8);
  var indexOfLastCard = currentPage * cantCardPerPage;
  var indexOfFirstCard = indexOfLastCard - cantCardPerPage;
  console.log("indexOfFirstCard");
  console.log(indexOfFirstCard);
  console.log("indexOfLastCard");
  console.log(indexOfLastCard);

  
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };
  // const currentCards = allRecipes.slice(
  //   indexOfFirstCard,
  //   indexOfLastCard
  // );

  return (
    <div className={styles.container}>
      <NavBar />
      <h1>este es el Home</h1>
      <Cards firstCard={indexOfFirstCard} lastCard={indexOfLastCard}/>
      {/* <Pagination cantCardPerPage="8" cantAllCards="200" page="3" /> */}
      <Pagination2 currentPage ={currentPage} totalPages={10} onPageChange={handlePageChange}/>
    </div>
  );
};

export default Home;
