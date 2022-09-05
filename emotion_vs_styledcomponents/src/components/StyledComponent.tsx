import React, { useState } from 'react';
import { randomColorGenerator } from '../utils/randomColor';
import { Container, Title, BgButton, FgButton } from '../css/StyledComponent.styled';

const App = () => {
  const [bgColor, setBgColor] = useState(randomColorGenerator());
  const [fgColor, setFgColor] = useState('#000000');

  const handleBgButtonTabbed = () => setBgColor(randomColorGenerator());
  const handleFgButtonTabbed = () => setFgColor(randomColorGenerator());

  return (
    <Container bgColor={bgColor} fgColor={fgColor}>
      <Title>Styled Component</Title>
      <p>MINIFIED : 43.3kB</p>
      <p>MINIFIED + GZIPPED : 15.8kB</p>
      <BgButton onClick={handleBgButtonTabbed}>Change Background Color</BgButton>
      <FgButton onClick={handleFgButtonTabbed}>Change Foreground Color</FgButton>
    </Container>
  );
};

export default App;
