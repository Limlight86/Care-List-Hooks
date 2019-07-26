import React from "react";
import { NeedToBuyList, InCartList } from "../../components";
import styles from "./MainLists.module.css";

const MainLists = () => (
  <div className={styles.listsBody}>
    <NeedToBuyList />
    <InCartList />
  </div>
);

export default MainLists;
