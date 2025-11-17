import React from "react";
import {useState} from "react";
import Top from "./Top";
import Buttom from "./buttom";

import {useContext} from "react";
import {Context} from "../../context/Context";
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const {onSent, recent, previous, setRecent, setLoading, setResult} = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecent(prompt);
    await onSent(prompt);
  };

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      id='sidebar'
      className='hidden sm:flex flex-col justify-between min-h-screen bg-gray-200 p-2 pt-4 font-display font-semibold '>
      <Top
        sidebarOpen={sidebarOpen}
        handleSidebar={handleSidebar}
        previous={previous}
        loadPrompt={loadPrompt}
        setLoading={setLoading}
        setResult={setResult}
      />
      <Buttom sidebarOpen={sidebarOpen} />
    </div>
  );
};

export default Sidebar;
