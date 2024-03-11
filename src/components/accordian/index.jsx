import React, { useState } from "react";
import data from "./data";

import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const indexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (indexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(indexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        {enableMultiSelection
          ? "Enable Single Selection"
          : "Enable Multi Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={data.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item?.id)
                    : () => handleSingleSelection(item?.id)
                }
                className="title"
                key={item?.id}
              >
                <h3>{item?.question}</h3>
                <span>
                  {selected === item?.id || multiple.indexOf(item?.id) !== -1
                    ? "-"
                    : "+"}
                </span>
              </div>
              {(selected === item?.id || multiple.indexOf(item?.id) !== -1) && (
                <p className="content">{item?.answer}</p>
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
