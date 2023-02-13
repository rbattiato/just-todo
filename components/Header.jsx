import { View, Text } from "react-native";
import Clock from "./Clock";
import RainIcon from "./RainIcon";

const Header = () => (
  <View className="header">
    <View className="header__content flex-row items-center">
      <View className="flex-row items-center mr-auto">
        <RainIcon />
        <View className="ml-2">
          <Text className="text-2xl">25°C</Text>
          <Text className="text-lg">Niedernhausen</Text>
        </View>
      </View>
      <Clock />
    </View>
  </View>
);

export default Header;
