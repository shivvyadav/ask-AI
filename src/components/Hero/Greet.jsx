import React from "react";

const Greet = () => {
  return (
    <>
      <div className='m-24'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent'>
          Hello there!
        </h2>
        <h2 className='font-semibold text-2xl md:text-4xl lg:text-5xl  text-gray-600'>How can I help you today?</h2>
      </div>
    </>
  );
};

export default Greet;
