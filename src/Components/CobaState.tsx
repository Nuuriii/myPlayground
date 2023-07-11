import { useState } from "react";
import { Buttons } from "./Buttons";

//Komponen CobaState
export const CobaState = () => {
   //State untuk menyimpan daftar kutipan acak
   const [randomQuote, setRandomQuote] = useState(["Ayo Makan"]);

   //State untuk menyimpan indeks kutipan yang sedang ditampilkan
   const [greet, setGreet] = useState(0);

   //State untuk menyimpan kutipan baru yang ditambahkan melalui input textarea
   const [newQuote, setNewQuote] = useState("");

   //Fungsi untuk menyimpan kutipan baru yang ditampilkan secara acak
   const changeGreet = () => {
      setGreet(() => Math.floor(Math.random() * randomQuote.length));
   };

   //Fungsi untuk menambahkan baru ke dalam daftar acak
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
