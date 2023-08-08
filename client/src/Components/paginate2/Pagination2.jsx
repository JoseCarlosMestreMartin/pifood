import React from 'react';
import styles from './Pagination.module.css';

const Pagination2 = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={styles.pagination}>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`${styles.pageNumber} ${currentPage === pageNumber ? styles.active : ''}`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination2;