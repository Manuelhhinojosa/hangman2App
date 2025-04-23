import React from "react";
import "./Animation.css";
import cero from "../../images/cero.jpg";
import one from "../../images/one.jpg";
import two from "../../images/two.jpg";
import three from "../../images/three.jpg";
import four from "../../images/four.jpg";
import five from "../../images/five.jpg";
import six from "../../images/six.jpg";

type AnimationProps = {
  numberOfGuesses: number;
};

export const Animation: React.FC<AnimationProps> = ({
  numberOfGuesses,
}: AnimationProps) => {
  return (
    <div className="imageContainer">
      {numberOfGuesses === 0 ? (
        <img className="image" src={cero} alt="cero" />
      ) : (
        ""
      )}

      {numberOfGuesses === 1 ? (
        <img className="image" src={one} alt="one" />
      ) : (
        ""
      )}

      {numberOfGuesses === 2 ? (
        <img className="image" src={two} alt="two" />
      ) : (
        ""
      )}

      {numberOfGuesses === 3 ? (
        <img className="image" src={three} alt="three" />
      ) : (
        ""
      )}

      {numberOfGuesses === 4 ? (
        <img className="image" src={four} alt="four" />
      ) : (
        ""
      )}

      {numberOfGuesses === 5 ? (
        <img className="image" src={five} alt="five" />
      ) : (
        ""
      )}

      {numberOfGuesses === 6 ? (
        <img className="image" src={six} alt="six" />
      ) : (
        ""
      )}

      {numberOfGuesses > 6 ? (
        <img className="image" src={cero} alt="cero" />
      ) : (
        ""
      )}
    </div>
  );
};
