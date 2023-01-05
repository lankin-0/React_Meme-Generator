//CSS
import "./Meme.css";
//Hooks
import { useState, useEffect } from "react";

function Meme() {
  // || STATES || \\
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/24y43o.jpg",
  });

  const [allmemes, setAllMemes] = useState([]);

  // || EFFECTS || \\
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const data = await response.json();
        setAllMemes(data.data.memes);
      } catch (error) {
        console.log("ERROR");
      }
    };

    fetchData();
  }, []);

  // || EVENT HANDLERS || \\
  const getMemeImage = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * allmemes.length);
    const url = allmemes[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <main className="main-meme">
      <form className="form-meme">
        <input
          name="topText"
          className="meme-input"
          type="text"
          id="input-one"
          placeholder="Shut Up"
          onChange={onChangeHandler}
          value={meme.topText}
        />
        <input
          name="bottomText"
          className="meme-input"
          type="text"
          id="input-two"
          placeholder="And take my money"
          onChange={onChangeHandler}
          value={meme.bottomText}
        />

        <button className="meme-button" onClick={getMemeImage}>
          <h3 className="button-text">Get a new meme image</h3>
        </button>
      </form>

      <div className="meme">
        <img className="main-img" src={meme.randomImage} alt="mainImage" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
