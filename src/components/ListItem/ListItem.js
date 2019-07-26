import React from "react";
import styles from "./ListItem.module.css";

const ListItem = ({ text, Button }) => (
  <div className={styles.listItem}>
    <span className={styles.text}>{text}</span>
    <span className={styles.swapButton}>
      <Button />
    </span>
  </div>
);
export default ListItem;
