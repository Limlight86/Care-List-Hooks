import React, { createContext, useState } from "react";

const ListContext = createContext();

const ListContextProvider = ({ children }) => {
  const [needToBuy, setNeedToBuy] = useState([]);
  const [inCart, setInCart] = useState([]);

  return (
    <ListContext.Provider value={{ needToBuy, inCart }}>
      {children}
    </ListContext.Provider>
  );
};

export { ListContext, ListContextProvider };
