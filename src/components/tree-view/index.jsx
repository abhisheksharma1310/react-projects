import React from "react";

import "./styles.css";
import MenuList from "./MenuList";
import menus from "./data";

const TreeView = () => {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
