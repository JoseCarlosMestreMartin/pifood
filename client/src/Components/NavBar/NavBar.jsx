import React from "react";
import styles from "./NavBar.module.css";
import SearchByName from "../SearchByName/SearchByName";
const NavBar = ()=>{
return (
    <nav className={styles.container}>
      <button className={styles.button}>Home</button>
      <div className={styles.rightSection}>
      <SearchByName />
      <SearchByName />  
      <SearchByName />  
      </div>
      {/* <FilterComponent />
      <SortComponent /> */}
    </nav>
    );
};

export default NavBar;