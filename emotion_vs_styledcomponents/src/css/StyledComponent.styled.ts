import styled from 'styled-components';

const Container = styled.div<{ bgColor: string; fgColor: string }>`
  background: ${(props) => props.bgColor};
  padding: 20px;
  & * {
    color: ${(props) => props.fgColor};
  }
`;

const Title = styled.h1`
  font-style: italic;
`;

const Button = styled.button`
  border: 0px solid black;
  font-size: 20px;
  cursor: pointer;
`;

const BgButton = styled(Button)`
  background-color: white;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const FgButton = styled(Button)`
  background-color: black;
  color: white;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export { Container, Title, BgButton, FgButton };
