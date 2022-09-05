import { css } from '@emotion/react';

type Props = {
  bgColor: string;
  fgColor: string;
};
const container = (props: Props) => css`
  background: ${props.bgColor};
  padding: 20px;
  & * {
    color: ${props.fgColor};
  }
`;

const title = css`
  font-style: italic;
`;

const button = css`
  border: 0px solid black;
  font-size: 20px;
  cursor: pointer;
`;

const bgButton = css`
  ${button}
  background-color: white;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const fgButton = css`
  ${button}
  background-color: black;
  color: white;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export { container, title, bgButton, fgButton };
