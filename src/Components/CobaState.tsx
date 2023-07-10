import { useState } from "react";
import { Buttons } from "./Buttons";

export const CobaState = () => {
   const randomQuote: string[] = [
      "Ayo Makan",
      "Gas Belajar",
      "Sudah Paham?",
      "Ayo aja gw mah",
   ];

   const [greet, setGreet] = useState(0);

   const changeGreet = () => {
      setGreet(() => Math.floor(Math.random() * 4));
   };

   return (
      <>
         <h2>{randomQuote[greet]}</h2>
         <Buttons click={changeGreet} task={"ubah"} />
      </>
   );
};
