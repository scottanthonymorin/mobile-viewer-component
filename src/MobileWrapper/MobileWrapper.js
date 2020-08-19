import React from "react";

import Desktop from "./Desktop";
import MobileDevice from "./MobileDevice";

import "./index.css";

const MobileWrapper = ({ background, children }) => (
  <Desktop background={background}>
    <MobileDevice>{children}</MobileDevice>
  </Desktop>
);

export default MobileWrapper;
