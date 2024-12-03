import React, { useState, useEffect } from "react";

export const Typing = ({ rawText }) => {
  const [text, setText] = useState(""); // Teks yang sedang diketik
  const [currentChar, setCurrentChar] = useState(""); // Karakter aktif
  const [isTyping, setIsTyping] = useState(true); // Status animasi mengetik
  const typingSpeed = 100; // Kecepatan mengetik dalam ms
  const charDelay = 50; // Delay per karakter untuk smooth effect

  useEffect(() => {
    if (!rawText || typeof rawText !== "string") {
      console.error("rawText tidak valid");
      return;
    }

    let index = 0; // Indeks karakter aktif
    let timeout; // Untuk menyimpan ID timeout

    const type = () => {
      if (index < rawText.length - 1) {
        setCurrentChar(rawText[index]); // Set karakter yang sedang diketik
        timeout = setTimeout(() => {
          setText((prev) => prev + rawText[index]); // Tambahkan ke teks final
          setCurrentChar(""); // Reset karakter aktif
          index++;
          setTimeout(type, typingSpeed); // Iterasi berikutnya
        }, charDelay);
      } else {
        setIsTyping(false); // Animasi selesai
      }
    };

    // Reset teks sebelum memulai
    setText("");
    setCurrentChar("");
    setIsTyping(true);
    type();

    // Bersihkan timeout saat komponen di-unmount
    return () => clearTimeout(timeout);
  }, [rawText]);

  return (
    <div className="text-left font-semibold text-white">
      <span>{text}</span>
      <span className="text-lime-dark">{currentChar}</span>
      {isTyping && (
        <span className="inline-block w-2 h-7 border-r-2 border-white animate-blink"></span>
      )}
    </div>
  );
};
