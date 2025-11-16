import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <Hero />
    </div>
  );
};

export default App;
