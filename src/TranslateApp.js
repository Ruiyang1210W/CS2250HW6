import React, { useState, useEffect } from "react";
import translationImage from './API error.png';
const TranslateApp = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const apiKey = "1515f20333mshceb6a303d97b703p131d6bjsn2808f062bb90";
  const targetLanguage = "zh";

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const translateText = async () => {
    try {
      const response = await fetch(
        "https://google-translate1.p.rapidapi.com/language/translate/v2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "application/gzip",
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
          },
          body: new URLSearchParams({
            q: inputText,
            target: targetLanguage,
            source: "en",
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTranslatedText(data.data.translations[0].translatedText);
        setIsDataLoaded(true);
      } else {
        console.error("Error:", response.statusText);
        setIsDataLoaded(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsDataLoaded(false);
    }
  };

  useEffect(() => {
    inputText.trim() !== "" && translateText();
  }, [inputText]);

  return (
    <div className="App">
      <h1>Translate to Chinese</h1>
      <label>
        Enter your text:
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
        />
      </label>
    
      {isDataLoaded && (
        <div>
          <p>{inputText}</p>
          <p>{translatedText}</p>
        </div>
      )}

          <p>If the translate not showing up, that's because my free plan is over:</p>
          <img src={translationImage} alt="Translation Image" />
          <p>Try it another day QWQ</p>
    </div>
    
  );
};

export default TranslateApp;
