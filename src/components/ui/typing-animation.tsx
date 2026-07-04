"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export default function TypingAnimation({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = words[currentWordIndex];

    if (!isDeleting) {
      // Typing text
      if (currentText.length < fullWord.length) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Pause at the end of the word
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      // Deleting text
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        // Move to the next word
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-block min-h-[1.2em] relative text-accent font-bold">
      {currentText}
      <span className="inline-block w-[2px] h-[1em] bg-accent ml-1 animate-pulse absolute -right-1 top-[10%]"></span>
    </span>
  );
}
