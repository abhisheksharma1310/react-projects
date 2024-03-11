import React from "react";
import Tabs from ".";

import "./styles.css";

const tabs = [
  {
    label: "Tab 1",
    content: "Content for tab 1",
  },
  {
    label: "Tab 2",
    content: "Content for tab 2",
  },
  {
    label: "Tab 3",
    content: "Content for tab 3",
  },
  {
    label: "Tab 4",
    content: "Content for tab 4",
  },
];

const TabTest = () => {
  return <Tabs tabsContent={tabs} />;
};

export default TabTest;
