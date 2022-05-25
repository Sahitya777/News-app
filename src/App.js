
import './App.css';
import { useLayoutEffect, useState } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './components/NewsCards/NewsCards';
const alanKey='9fafd847cbf4a5e9529f3d2462ad5e082e956eca572e1d8b807a3e2338fdd0dc/stage';
const App=()=> {

  const [newsArticles,setNewsArticles]=useState([]);

  useLayoutEffect(() => {
    function updateScreen(time) {
      alanBtn({
        key: alanKey,
        onCommand: ({ command,articles }) => {
          if (command === 'newHeadlines') {
            setNewsArticles(articles);
          }
        }
      })
    }

    requestAnimationFrame(updateScreen);
  }, [])
  return (
    <div className="App">
      <h1>ALAN AI News App</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
