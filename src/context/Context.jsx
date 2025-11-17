import {createContext} from "react";
import main from "../config/askApi";
import {useState} from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recent, setRecent] = useState("");
  const [previous, setPrevious] = useState([]);
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setResult(true);
    let response;
    if (prompt) {
      response = await main(prompt);
      setRecent(prompt);
    } else {
      setPrevious((prev) => [...prev, input]);
      setRecent(input);
      response = await main(input);
    }
 
    let newArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < newArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += newArray[i];
      } else {
        newResponse += "<b>" + newArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    recent,
    setRecent,
    previous,
    setPrevious,
    result,
    setResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
  };
  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
