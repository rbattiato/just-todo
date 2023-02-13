import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Checkmark = (props) => (
  <Svg
    width={14}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m4.169 7.89-3.11-3.11L0 5.831 4.169 10l8.948-8.949L12.066 0 4.169 7.89Z"
      fill="#FAFAFE"
    />
  </Svg>
);

export default Checkmark;
