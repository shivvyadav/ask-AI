import React from "react";
import Greet from "./Greet";
import Cards from "./Cards";
import Message from "./Message";
import {useContext} from "react";
import {Context} from "../../context/Context";

const Main = () => {
  const {onSent, recent, result, loading, resultData, input, setInput} = useContext(Context);

  return (
    <div className='bg-zinc-100 w-screen relative'>
      <h1 className='text-2xl font-semibold text-gray-600 p-6'>Ask AI</h1>
      <div className='max-w-4xl mx-auto '>
        {!result ? (
          <>
            <Greet />
            <Cards onSent={onSent} />
          </>
        ) : (
          <div className='h-[500px] pl-1 py-4 overflow-y-scroll scrollbar-hide '>
            <div className='mb-4 flex gap-3 items-center'>
              <i class='fa-solid fa-q'> .</i>
              <p className=' text-lg '>{recent}</p>
            </div>
            <div className='mt-6 flex gap-3'>
              <i class='fa-solid fa-wand-magic-sparkles'></i>
              {loading ? (
                <div className='flex flex-col gap-3 w-full animate-pulse '>
                  <hr className='h-6 border-none rounded-md  bg-gradient-to-r from-pink-200 via-pink-400 to-purple-600' />
                  <hr className='h-6 rounded-md border-none bg-gradient-to-r from-pink-200 via-pink-400 to-purple-600' />
                  <hr className='h-6 rounded-md border-none bg-gradient-to-r from-pink-200 via-pink-400 to-purple-600' />
                </div>
              ) : (
                <p className=' leading-loose ' dangerouslySetInnerHTML={{__html: resultData}}></p>
              )}
            </div>
          </div>
        )}
      </div>

      <Message input={input} setInput={setInput} onSent={onSent} />
    </div>
  );
};

export default Main;
