import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/newsCards/NewsCards";
import useStyles from "./styles.js";
import wordsToNumbers from 'words-to-numbers'

const alanKey =
  "b0cb3b2eeeead6bcb92b5d6fe99979f52e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const classes = useStyles();
  const [newsArticles, setNewsArtcles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArtcles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }else if(command === 'open'){
          const parsedNumber = number.length > 2? wordsToNumbers(number, {fuzzy: true}) : number;
          const article = articles[parsedNumber - 1]

          if(parsedNumber > 20){
            alanBtn().playText('please try again')
          }else{
            window.open(article.url, '_blank')
            alanBtn().playText('opening...')
          }
          
        }
      },
    });
  }, []);
  return (
    <div className='App'>
      <div className={classes.logoContainer}>
        <img
          src='https://alan.app/voice/image/previews/preview.jpg'
          className={classes.alanLogo}
          alt='alan Logo'
        />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
