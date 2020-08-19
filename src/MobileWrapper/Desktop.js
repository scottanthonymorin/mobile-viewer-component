import React from "react";
import styled from "styled-components";

const Desktop = ({ background, children }) => {
  return <Wrapper background={background}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  ${(props) =>
    props.background === "cross-dots" &&
    `
    background:
      radial-gradient(black 3px, transparent 4px),
      radial-gradient(black 3px, transparent 4px),
      linear-gradient(#fff 4px, transparent 0),
      linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px),
      linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px),
      #fff;
      background-size: 109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px;
      background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
  `}
  ${(props) =>
    props.background === "wave" &&
    `
    background: linear-gradient(#ffffff 50%, rgba(255,255,255,0) 0) 0 0,
      radial-gradient(circle closest-side, #FFFFFF 53%, rgba(255,255,255,0) 0) 0 0,
      radial-gradient(circle closest-side, #FFFFFF 50%, rgba(255,255,255,0) 0) 55px 0 #48B;
      background-size: 110px 200px;
      background-repeat: repeat-x;
  `}
  ${(props) =>
    props.background === "microbial-mat" &&
    `
    background:
      radial-gradient(circle at 0% 50%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px) 0px 10px,
      radial-gradient(at 100% 100%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px),
      #8a3;
      background-size: 20px 20px;
  `}
  ${(props) =>
    props.background === "weave" &&
    `
    background:
      linear-gradient(135deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
      linear-gradient(225deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px;
      background-color:#708090;
      background-size: 64px 128px;
  `}
`;

export default Desktop;
