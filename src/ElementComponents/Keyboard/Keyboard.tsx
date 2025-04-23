import React from "react";
import "./Keyboard.css";
import { Keys } from "../../TypescriptHelperFiles/keys";

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export const Keyboard: React.FC<KeyboardProps> = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) => {
  return (
    <div className="KBContainer">
      {Keys.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            className={`button ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            } ${isActive ? "active2" : ""}`}
            key={key}
            onClick={() => {
              addGuessedLetter(key);
            }}
            disabled={isInactive || isActive}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
