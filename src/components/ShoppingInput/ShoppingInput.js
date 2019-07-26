import React, { useContext, useState } from "react";
import { ListContext } from "../../context/ListContext";
import inputValidation from '../../util/InputValidation'
import uuidv4 from "uuid/v4";
import Styles from "./ShoppingInput.module.css";

const ShoppingInput = () => {
  const {needToBuy, inCart, setNeedToBuy} = useContext(ListContext)
  const [text, setText] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (!inputValidation(text, setText, needToBuy, inCart )) {return}
    const item = {text, inCart: false, id: uuidv4()}
    setNeedToBuy([...needToBuy, item])
    setText("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
      <button type="submit">Add to List</button>
    </form>
  );
};

export default ShoppingInput;
