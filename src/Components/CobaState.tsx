import { useState } from "react";
import { Buttons } from "./Buttons";

export const CobaState = () => {
   const randomQuote: string[] = [
      "Ayo Makan",
      "Gas Belajar",
      "Sudah Paham?",
      "Ayo aja gw mah",
      "Yeyyy merdeka",
      "17 Agustus 2023",
      "Di rumah",
      "Sedang Sibuk",
   ];

   const [greet, setGreet] = useState(0);
   const [add, setAdd] = useState("");

   const changeGreet = () => {
      setGreet(() => Math.floor(Math.random() * 8));
   };

   return (
      <>
         <h2>{randomQuote[greet]}</h2>
         <Buttons click={changeGreet} task={"ubah"} />
         <input type='text' />
         <Buttons click={} />
      </>
   );
};
