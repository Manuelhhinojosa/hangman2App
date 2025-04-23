import "./HangmanPage.css";
import { Animation } from "../../ElementComponents/Animation/Animation";
import { Keyboard } from "../../ElementComponents/Keyboard/Keyboard";
import { WordToGuess } from "../../ElementComponents/WordToGuess/WordToGuess";
import { OutcomeMessage } from "../../ElementComponents/OutcomeMessage/OutcomeMessage";

type AllProps = {
  numberOfGuesses: number;
  wordToGuess: string;
  guessedLetters: string[];
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  isWinner: boolean;
  isLoser: boolean;
  reveal?: boolean;
  handleRestart: () => void;
};

export const HangmanPage: React.FC<AllProps> = ({
  numberOfGuesses,
  wordToGuess,
  guessedLetters,
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  isWinner,
  isLoser,
  reveal = false,
  handleRestart,
}: AllProps) => {
  return (
    <div className="hangmanPage">
      <div className="mainConatiner">
        <OutcomeMessage
          isWinner={isWinner}
          isLooser={isLoser}
          handleRestart={handleRestart}
        />
        <div className="leftContainer">
          <div className="animationContainer">
            <Animation numberOfGuesses={numberOfGuesses} />
          </div>
          <div className="wordToGuessContainer">
            <WordToGuess
              wordToGuess={wordToGuess}
              guessedLetters={guessedLetters}
              reveal={reveal}
            />
          </div>
        </div>
        <div className="writeContainer">
          <div className="keyboardContainer">
            <Keyboard
              activeLetters={activeLetters}
              inactiveLetters={inactiveLetters}
              addGuessedLetter={addGuessedLetter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
