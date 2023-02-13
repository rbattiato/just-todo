import { useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Task from "../components/Task";

const Home = () => {
  const [tasks, setTasks] = useState([
    { id: "1", title: "This is the Task No. 1", checked: true },
    { id: "2", title: "This is the Task No. 2", checked: false },
    { id: "3", title: "This is the Task No. 3", checked: true },
    { id: "4", title: "This is the Task No. 4", checked: false },
    { id: "5", title: "This is the Task No. 5", checked: false },
  ]);

  const checkTask = useCallback((id) => {
    const index = tasks.findIndex((el) => el.id === id);
    if (index >= 0) {
      const newTasks = [...tasks];
      newTasks[index].checked = !tasks[index].checked;
      setTasks(newTasks);
    }
  }, []);

  return (
    <SafeAreaView className="home flex-1 px-8 py-5">
      <Header />
      <View className="mt-16">
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Task {...item} handleCheck={checkTask} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;