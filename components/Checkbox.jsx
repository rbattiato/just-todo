import { View, Text } from "react-native";
import Checkmark from "./Checkmark";
import classnames from "classnames";

const Checkbox = ({ checked }) => (
  <View
    className={classnames(
      "checkbox w-5 h-5 border-2 border-blue-900 rounded-[4px] cursor-pointer justify-center items-center",
      {
        "bg-blue-900": checked,
        "bg-white": !checked,
      }
    )}
  >
    <Checkmark
      className={classnames("checkbox__checkmark", {
        "opacity-0": !checked,
      })}
    />
  </View>
);

export default Checkbox;
