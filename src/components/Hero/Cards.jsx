import React from "react";

const Cards = ({onSent}) => {
  return (
    <>
      <div className='hidden sm:max-w-[400px] sm:grid sm:grid-cols-2 md:max-w-[500px] md:grid md:grid-cols-2 lg:max-w-[800px] lg:grid lg:grid-cols-4 gap-4 m-24 text-gray-600 '>
        <div
          className='bg-gray-200 rounded-2xl p-2 px-4 min-h-40 relative hover:bg-gray-300 hover:-translate-1 transition-all cursor-pointer '
          onClick={() => onSent("Suggest beautiful places to see on an upcoming road trip")}>
          <p>Suggest beautiful places to see on an upcoming road trip</p>
          <i className='fa-regular fa-compass text-2xl absolute bottom-3 right-3'></i>
        </div>
        <div
          className='bg-gray-200 rounded-2xl p-2 px-4 min-h-40 relative hover:bg-gray-300 hover:-translate-1 transition-all cursor-pointer'
          onClick={() => onSent("Briefly summarize this concept: urban planning")}>
          <p>Briefly summarize this concept: urban planning</p>
          <i className='fa-solid fa-lightbulb text-2xl absolute bottom-3 right-3'></i>
        </div>
        <div
          className='bg-gray-200 rounded-2xl p-2 px-4 min-h-40 relative hover:bg-gray-300 hover:-translate-1 transition-all cursor-pointer'
          onClick={() => onSent("Brainstorm team bonding activities for our work retreat")}>
          <p>Brainstorm team bonding activities for our work retreat</p>
          <i className='fa-regular fa-message text-xl absolute bottom-3 right-3'></i>
        </div>
        <div
          className='bg-gray-200 rounded-2xl p-2 px-4 min-h-40 relative hover:bg-gray-300 hover:-translate-1 transition-all cursor-pointer'
          onClick={() => onSent("Improve the readability of the following code")}>
          <p>Improve the readability of the following code</p>
          <i className='fa-solid fa-code text-xl absolute bottom-3 right-3'></i>
        </div>
      </div>
    </>
  );
};

export default Cards;
