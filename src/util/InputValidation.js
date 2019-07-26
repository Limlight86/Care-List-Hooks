const inputValidation = (text, setText, needToBuy, inCart) => {
  if (!text.trim()) {
    alert("Please specify an item to add.");
    setText("");
    return false;
  } else if (
    needToBuy.some(item => item.text.toLowerCase() === text.toLowerCase()) ||
    inCart.some(item => item.text.toLowerCase() === text.toLowerCase())
  ) {
    alert("Item is already in your list.");
    setText("");
    return false;
  } else {
    return true;
  }
};

export default inputValidation;
