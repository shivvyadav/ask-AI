const apiKey = import.meta.env.VITE_API_KEY;
import {GoogleGenAI} from "@google/genai";

const ai = new GoogleGenAI({apiKey: apiKey});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        text: prompt,
      },
    ],
  });
  console.log(response.text);
  return response.text;
}

export default main;
