import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Pressable } from "react-native";

const BackBtn = ({ onPress }) => (
  <Pressable onPress={onPress}>
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M24 10.5H5.745l8.385-8.385L12 0 0 12l12 12 2.115-2.115-8.37-8.385H24v-3Z"
        fill="#222F3E"
      />
    </Svg>
  </Pressable>
);

export default BackBtn;
