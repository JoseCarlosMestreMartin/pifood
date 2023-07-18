import React from 'react';
import styles from './PageItem.module.css';

const PageItem = ({ number, highlight, onClick}) => {
  return (
    <div
      className={`${styles.pageItem} ${highlight ? styles.highlight : ''}`}
      onClick={onClick}
    >
      {number}
    </div>
  );
};

export default PageItem;
