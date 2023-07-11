import { useState } from "react";
import { Buttons } from "./Buttons";

//Komponen CobaState
export const CobaState = () => {
   //State untuk menyimpan daftar kutipan acak
   const [randomQuote, setRandomQuote] = useState(["Ayo Makan"]);
   const [greet, setGreet] = useState(0);
   const [newQuote, setNewQuote] = useState("");

   const changeGreet = () => {
      setGreet(() => Math.floor(Math.random() * randomQuote.length));
   };

   const addQuote = () => {
      if (newQuote) {
         setRandomQuote((prevQuotes) => [...prevQuotes, newQuote]);
         setNewQuote("");
      }
   };

   return (
      <>
         <h2>{randomQuote[greet]}</h2>
         <Buttons click={changeGreet} task={"ubah"} />
         <textarea
            placeholder='Tambahkan quote baru'
            value={newQuote}
            onChange={(e) => setNewQuote(e.target.value)}
         />
         <Buttons click={addQuote} task={"Tambah"} />
      </>
   );
};
