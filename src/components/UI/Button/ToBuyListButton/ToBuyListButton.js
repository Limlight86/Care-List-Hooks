import React, { useContext } from "react";
import { ListContext } from "../../../../context/ListContext";

const ToBuyListButton = ({ id }) => {
  const { needToBuy, setNeedToBuy, inCart, setInCart } = useContext(ListContext);

  const handleClick = id => {
    let filteredList = inCart.filter(item => item.id !== id)
    let movedItem = inCart.find(item => item.id === id)
    setInCart(filteredList)
    setNeedToBuy([...needToBuy, movedItem])
  };

  return <button onClick={() => handleClick(id)}>Return to Buy List</button>;
};

export default ToBuyListButton;