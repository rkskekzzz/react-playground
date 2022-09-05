/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';
import { randomColorGenerator } from '../utils/randomColor';
import { container, title, bgButton, fgButton } from '../css/EmotionComponent.styled';

const App = () => {
  const [bgColor, setBgColor] = useState(randomColorGenerator());
  const [fgColor, setFgColor] = useState('#000000');

  const handleBgButtonTabbed = () => setBgColor(randomColorGenerator());
  const handleFgButtonTabbed = () => setFgColor(randomColorGenerator());

  return (
    <div css={container({ bgColor, fgColor })}>
      <h1 css={title}>Emotion Component</h1>
      <p>MINIFIED : 43.3kB</p>
      <p>MINIFIED + GZIPPED : 15.8kB</p>
      <button css={bgButton} onClick={handleBgButtonTabbed}>
        Change Background Color
      </button>
      <button css={fgButton} onClick={handleFgButtonTabbed}>
        Change Foreground Color
      </button>
    </div>
  );
};

export default App;
