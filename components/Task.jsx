import { View, Text, Pressable } from "react-native";
import Checkbox from "./Checkbox";

const Task = ({ id, title, checked, handleCheck }) => (
  <Pressable onPress={() => handleCheck(id)}>
    <View className="task w-full px-2 py-3 shadow-sm rounded-lg cursor-pointer">
      <View className="task__content flex-row items-center">
        <Checkbox checked={checked} />
        <Text className="ml-4 text-base text-blue-900"> {title} </Text>
      </View>
    </View>
  </Pressable>
);

export default Task;
