import React, { useState } from "react";
import styles from "./SearchByName.module.css";

const SearchByName = () => {
  function HandleChange(e) {
    // props.searchRecipe(e.target.value);
  }
  return (
    <div className={styles["search-recipe"]}>
      <input
        type="text"
        placeholder="Buscar receta..."
        onChange={HandleChange}
        className={styles["search-input"]}
      />
    </div>
  );
};

export default SearchByName;
