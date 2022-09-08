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
      <p>MINIFIED : 33.5kB</p>
      <p>MINIFIED + GZIPPED : 12.7kB</p>
      <BgButton onClick={handleBgButtonTabbed}>Change Background Color</BgButton>
      <FgButton onClick={handleFgButtonTabbed}>Change Foreground Color</FgButton>
    </Container>
  );
};

export default App;
