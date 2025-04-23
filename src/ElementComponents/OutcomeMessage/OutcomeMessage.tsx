import React from "react";
import "./OutcomeMessage.css";

type outcomeMessageProps = {
  isWinner: boolean;
  isLooser: boolean;
  handleRestart: () => void;
};

export const OutcomeMessage: React.FC<outcomeMessageProps> = ({
  isWinner,
  isLooser,
  handleRestart,
}: outcomeMessageProps) => {
  console.log(document.querySelector("#hidden"));

  if (isLooser || isWinner === true) {
    document.querySelector(".hidden")?.classList.remove("hidden");
  }

  return (
    <div className="hidden outcomeMessage">
      <div className="container">
        <div className="text">{isWinner ? "You Win" : "You loose"}</div>
        <div className="playButton">
          <button
            onClick={() => {
              handleRestart();
            }}
          >
            play again
          </button>
        </div>
      </div>
    </div>
  );
};
