import { useState } from "react";
import SideNav from "./components/nav/SideNav";
import Content from "./components/Content";
import "./App.css";

const App = () => {
  const [selectedComponentName, setSelectedComponentName] = useState(null);

  const handleSelect = (componentName) => {
    setSelectedComponentName(componentName);
  };

  return (
    <div className="App">
      <SideNav onSelect={handleSelect} />
      <Content selectedComponentName={selectedComponentName} />
    </div>
  );
};

export default App;
