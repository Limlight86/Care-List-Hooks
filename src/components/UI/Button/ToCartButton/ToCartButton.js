import React, { useContext } from "react";
import { alphabetize } from "../../../../util";
import { ListContext } from "../../../../context/ListContext";
import styles from "./ToCartButton.module.css";

const ToCartButton = ({ id }) => {
  const { needToBuy, setNeedToBuy, inCart, setInCart } = useContext(ListContext);

  const handleClick = id => {
    let filteredList = needToBuy.filter(item => item.id !== id);
    let movedItem = needToBuy.find(item => item.id === id);
    setNeedToBuy(alphabetize(filteredList));
    setInCart(alphabetize([...inCart, movedItem]));
  };

  return (
    <button className={styles.toCartButton} onClick={() => handleClick(id)}>
      Add to Cart
    </button>
  );
};

export default ToCartButton;
