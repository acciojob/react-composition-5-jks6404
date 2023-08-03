import React, { useState } from "react";

const Tabs = ({tabs, key}) => {
  const [activeTab, setActiveTab] = useState(0);

  function handleTabClick(index) {
    setActiveTab(index);
  }

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li key={`tab_${key}_${index}`} onClick={() => handleTabClick(index)}>
            <p className={activeTab === index ? "active" : ""}>
              {tab.title}
            </p>
          </li>
        ))}
      </ul>
      <div>{tabs[activeTab] && <p>{tabs[activeTab].content}</p>}</div>
    </div>
  );
};

export default Tabs;

// key={`tab_${key}_${index}`} 