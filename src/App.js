import React, { useState } from "react";
import "./styles.css";

let emojiDict = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple"
};

let emojiList = Object.keys(emojiDict);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiChangeHandler(event) {
    let emoticon = event.target.value;
    if (emojiDict[emoticon] === undefined) {
      console.log(emojiDict[emoticon]);
      setMeaning("type an emoji or select one to know its meaning");
    } else {
      setMeaning(emojiDict[emoticon]);
    }
  }

  function emojiClickHandler(event) {
    let emoticon = event.target.innerText;
    setMeaning(emojiDict[emoticon]);
    document.querySelector("#inputEmoji").value = emoticon;
  }
  return (
    <div className="App">
      <h1>Know your Emoji</h1>
      <input
        id="inputEmoji"
        onChange={emojiChangeHandler}
        maxLength={2}
        placeholder="enter emoji here"
      ></input>
      <p className="outInfo">{meaning}</p>
      <p className="info">Emojis we know: </p>
      <ul>
        {emojiList.map((emoji, index) => {
          return (
            <li onClick={emojiClickHandler} key={index}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
