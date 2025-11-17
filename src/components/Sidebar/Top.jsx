import React from "react";

const Top = ({sidebarOpen, handleSidebar, previous, loadPrompt, setLoading, setResult}) => {
  const newChat = () => {
    setLoading(false);
    setResult(false);
  };
  return (
    <>
      <div id='top' className='flex gap-6 flex-col mt-4 p-3 text-gray-700 '>
        <i className='fa-solid fa-bars text-xl ml-2 cursor-pointer p-2' onClick={handleSidebar}></i>
        <div
          className='flex gap-3 items-center mt-4 hover:bg-gray-300 rounded-4xl p-2 px-4 w-fit cursor-pointer'
          onClick={newChat}>
          <i className='fa-solid fa-plus text-xl '></i>
          {sidebarOpen && <p className='font-semibold'>New Chat</p>}
        </div>
        {sidebarOpen && (
          <div>
            <p className='font-semibold'>Recents</p>
            {previous.map((prev) => (
              <div
                className='flex gap-3 items-center mt-2 p-1 ml-2 hover:bg-gray-300 rounded-4xl px-4 w-[180px] cursor-pointer'
                onClick={() => loadPrompt(prev)}>
                <i className='fa-regular fa-message text-md'></i>
                <p className='font-light'>{prev.slice(0, 12)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Top;
