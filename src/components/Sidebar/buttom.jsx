import React from "react";

const Buttom = ({sidebarOpen}) => {
  return (
    <>
      <div id='buttom' className='flex flex-col gap-2 mt-4 p-3 text-gray-700'>
        <div className='flex gap-6 items-center hover:bg-gray-300 rounded-4xl p-2 px-4 cursor-pointer'>
          <i className='fa-regular fa-circle-question text-xl'></i>
          {sidebarOpen && <p>Help</p>}
        </div>
        <div className='flex gap-6 items-center hover:bg-gray-300 rounded-4xl p-2 px-4 cursor-pointer '>
          <i className='fa-solid fa-clock-rotate-left text-xl'></i>
          {sidebarOpen && <p>History</p>}
        </div>
        <div className='flex gap-6 items-center hover:bg-gray-300 rounded-4xl p-2 px-4 cursor-pointer '>
          <i className='fa-solid fa-gear text-xl '></i>
          {sidebarOpen && <p>Settings</p>}
        </div>
      </div>
    </>
  );
};

export default Buttom;
