import React from "react";
import { ListContext, ListContextProvider } from "../../context/ListContext";
import { ShoppingInput } from "../../components";
import MainLists from "../MainLists/MainLists";
import styles from "./Layout.module.css";

const Layout = () => (
  <ListContextProvider>
    <div>
      <h1>Care-List</h1>
      <ShoppingInput />
      <MainLists />
    </div>
  </ListContextProvider>
);

export default Layout;
