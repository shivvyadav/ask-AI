import React from "react";

const Message = ({input, setInput, onSent}) => {
  return (
    <>
      <div className='w-[95%] sm:w-[80%] md:w-[70%] lg:w-2xl max-w-2xl left-1/2 -translate-x-1/2 absolute bottom-6 px-2'>
        <div className='flex sm:flex-row justify-between items-center p-3 sm:p-1 bg-gray-200 rounded-3xl '>
          <input
            className='sm:flex-1 bg-transparent mx-2 sm:mx-4 outline-none text-base sm:text-lg '
            type='text'
            placeholder='Type your message...'
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div className='flex gap-3 sm:gap-6 text-lg sm:text-xl text-gray-600 mt-2 sm:mt-0 sm:p-2.5'>
            <i className='fa-solid fa-image cursor-pointer '></i>
            <i className='fa-solid fa-microphone cursor-pointer'></i>
            <i
              className='fa-solid fa-paper-plane rotate-40 cursor-pointer'
              onClick={() => onSent()}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
