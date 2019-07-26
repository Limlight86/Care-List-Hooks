import React, { useContext } from "react";
import { ListItem, ToBuyListButton } from "../../components";
import { ListContext } from "../../context/ListContext";
import styles from "./InCartList.module.css";

const InCartList = () => {
  const { inCart } = useContext(ListContext)

  return (
    <div className={styles.list}>
      <h3 className={styles.listTitle}>In Cart</h3>
      {inCart.map(item => {
        return (
          <ListItem
            text={item.text}
            key={item.id}
            id={item.id}
            Button={<ToBuyListButton />}
          />
        );
      })}
    </div>
  );
};

export default InCartList;
