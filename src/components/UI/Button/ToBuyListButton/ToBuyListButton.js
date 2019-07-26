import React, { useContext } from "react";
import { alphabetize } from "../../../../util";
import { ListContext } from "../../../../context/ListContext";
import styles from "./ToBuyListButton.module.css";

const ToBuyListButton = ({ id }) => {
  const { needToBuy, setNeedToBuy, inCart, setInCart } = useContext(ListContext);

  const handleClick = id => {
    let filteredList = inCart.filter(item => item.id !== id);
    let movedItem = inCart.find(item => item.id === id);
    setInCart(alphabetize(filteredList));
    setNeedToBuy(alphabetize([...needToBuy, movedItem]));
  };

  return (
    <button className={styles.toBuyButton} onClick={() => handleClick(id)}>
      Return to Buy List
    </button>
  );
};

export default ToBuyListButton;
