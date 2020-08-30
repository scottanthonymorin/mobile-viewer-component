import React from "react";
import styled from "styled-components";

import { settings } from "./settings";
const { black } = settings.colors;

const MobileDevice = ({ children }) => (
  <Wrapper>
    <InnerWrapper>
      <Content>{children}</Content>
    </InnerWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${black};
  border-radius: 35px;
  border-top: 26px solid;
  border-bottom: 26px solid;
  border-left: 16px solid;
  border-right: 16px solid;
  border-color: ${black};
  box-sizing: border-box;
  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.1);
  height: 100%;
  min-width: 320px;
  width: 100%;

  @media screen and (min-width: 410px) {
    height: 750px;
    width: 410px;
  }
`;
const InnerWrapper = styled.div`
  box-sizing: border-box;
  overflow: scroll;
  background: #fff;
  border-radius: 26px;
  height: 100%;
`;
const Content = styled.div`
  box-sizing: border-box;
  height: 100%;
  position: relative;
`;

export default MobileDevice;
