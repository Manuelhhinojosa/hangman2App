import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./PageComponents/Home/Home";
import { ErrorPage } from "./PageComponents/ErrorPage/ErrorPage";
import { HangmanPage } from "./PageComponents/HangmanPage/HangmanPage";
import words from "./wordList.json";
import { createDocumentRegistry } from "typescript";

const App: React.FC = () => {
  const getWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const [wordToGuess, setWordToGuess] = useState<string>(getWord());

  const [guessedLetters, setGuessesLetters] = useState<string[]>([]);

  let incorrectLetters: string[] = guessedLetters.filter(
    (letter: string) => !wordToGuess.includes(letter)
  );

  let isLoser = incorrectLetters.length >= 6;

  let isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = (key: string) => {
    if (guessedLetters.includes(key) || isLoser || isWinner) return;

    setGuessesLetters((currentLetters) => [...currentLetters, key]);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  const handleRestart = () => {
    document.querySelector(".outcomeMessage")?.classList.add("hidden");
    setWordToGuess(getWord());
    setGuessesLetters([]);
    incorrectLetters = [];
    isLoser = false;
    isWinner = false;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/hangman"
        element={
          <HangmanPage
            numberOfGuesses={incorrectLetters.length}
            wordToGuess={wordToGuess}
            guessedLetters={guessedLetters}
            activeLetters={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
            isWinner={isWinner}
            isLoser={isLoser}
            reveal={isLoser}
            handleRestart={handleRestart}
          />
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
