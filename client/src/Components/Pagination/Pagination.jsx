// Pagination.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./Pagination.module.css";

const Pagination = ({
  cantCardPerPage,
  cantAllCards,
  page,
  setPageToView,
  
}) => {
  const totalPages = Math.ceil(cantAllCards / cantCardPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={i == page ? styles.active : ""}>
          <button onClick={() => setPageToView(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPageToView(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPageToView(page + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevPage} disabled={page == 1}>
        Prev
      </button>
      <ul className={styles.pageNumbers}>{renderPageNumbers()}</ul>

      <button onClick={handleNextPage} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  cantCardPerPage: PropTypes.number.isRequired,
  cantAllCards: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setMinCardToView: PropTypes.func.isRequired,
  setMaxCardToView: PropTypes.func.isRequired,
};

export default Pagination;
