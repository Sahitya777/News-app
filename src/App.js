
import './App.css';
import { useLayoutEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
const alanKey='9fafd847cbf4a5e9529f3d2462ad5e082e956eca572e1d8b807a3e2338fdd0dc/stage';
const App=()=> {
  useLayoutEffect(() => {
    function updateScreen(time) {
      alanBtn({
        key: alanKey,
        onCommand: ({ command,articles }) => {
          if (command === 'newHeadLines') {
            console.log(articles);
          }
        }
      })
    }

    requestAnimationFrame(updateScreen);
  }, [])
  return (
    <div className="App">
      <h1>ALAN AI News App</h1>
    </div>
  );
}

export default App;
