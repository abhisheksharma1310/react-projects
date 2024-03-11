import React from "react";
import { useState } from "react";

const Tabs = ({ tabsContent }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
  };

  return (
    <div className="wrapper">
      <div>
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        <h1>
          {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
        </h1>
      </div>
    </div>
  );
};

export default Tabs;
