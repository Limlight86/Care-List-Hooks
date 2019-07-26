import React, { useContext } from "react";
import { ListContext } from "../../../../context/ListContext";

const ToCartButton = ({ id }) => {
  const { needToBuy, setNeedToBuy, inCart, setInCart } = useContext(ListContext);

  const handleClick = id => {
    let filteredList = needToBuy.filter(item => item.id !== id)
    let movedItem = needToBuy.find(item => item.id === id)
    setNeedToBuy(filteredList)
    setInCart([...inCart, movedItem])
  };

  return <button onClick={() => handleClick(id)}>Add to Cart</button>;
};

export default ToCartButton;
