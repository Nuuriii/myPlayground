// Buat Komponen ImageSlider: Buat komponen utama ImageSlider yang akan mengelola state dan logika slider. Komponen ini akan memiliki state yang melacak slide yang sedang aktif dan melakukan transisi antar slide.
import { useState } from "react";
import { Buttons } from "./Buttons";

//Buat tipe data alternatif menggunakan interface untuk membuat props yang berupa string, Karena kita akan menggunakan url untuk menampilkan gambarnya di web

interface ImageSliderProps {
   images: string[];
}

//Gunakan tipe data yang telah dibuat ke dalam component kita
//Dan buat props dengan nama yang sama dengan properti yang kita tambahkan di tipe data alternative kita
export const ImageSlider = ({ images }: ImageSliderProps) => {
   //Simpan useState dengan membuat variabel
   const [currentSlide, setCurrentSlide] = useState(0);

   //Buat sebuah fungsi untuk membuat slide ke gambar sebelumnya
   const goToPreviousSlide = () => {
      setCurrentSlide((prevSlide) =>
         prevSlide === 0 ? images.length - 1 : prevSlide - 1
      );
   };

   //Buat sebuah fungsi untuk membuat slide ke gambar sesudahnya
   const goToNextSlide = () => {
      setCurrentSlide((nextSlide) => (nextSlide + 1) % images.length);
   };

   const tambah = () => {
      setCurrentSlide((angkaPertama) => angkaPertama + 1);
   };

   return (
      <div>
         {/*Buat 3 elemen utama yaitu img, dan 2 buah button*/}
         <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
         {/* buat Buttons Menggunakan Component React agar kita hanya mengimport dari file lainnya, daripada buat sendiri */}
         <Buttons click={goToPreviousSlide} task={"Kembali"} />
         <Buttons click={goToNextSlide} task={"Lanjut"} />
         <Buttons click={tambah} task={"Tambah"} />
      </div>
   );
};
