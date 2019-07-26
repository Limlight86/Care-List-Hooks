import React, { useContext } from "react";
import { ListItem, ToCartButton } from "../../components";
import { ListContext } from "../../context/ListContext";
import styles from "./NeedToBuyList.module.css";

const NeedToBuyList = () => {
  const { needToBuy } = useContext(ListContext);

  return (
    <div className={styles.list}>
      <h3 className={styles.listTitle}>Need To Buy</h3>
      {needToBuy.map(item => {
        return (
          <ListItem
            text={item.text}
            key={item.id}
            id={item.id}
            Button={<ToCartButton />}
          />
        );
      })}
    </div>
  );
};

export default NeedToBuyList;
