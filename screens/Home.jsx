import { useState, useCallback, useLayoutEffect } from "react";
import { View, FlatList, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Task from "../components/Task";
import AddBtn from "../components/AddBtn";
import BackBtn from "../components/BackBtn";
import socket from "../utils/socket";

const Home = () => {
  const [addingTask, setAddingTask] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const checkTask = useCallback((id) => {
    const index = tasks.findIndex((el) => el.id === id);
    if (index >= 0) {
      const newTasks = [...tasks];
      newTasks[index].checked = !tasks[index].checked;
      setTasks(newTasks);
    }
  }, []);

  const addTask = useCallback(() => {
    socket.emit("addTodo", newTask);
    handleBack();
  }, [newTask]);

  const handleBack = useCallback(() => {
    setAddingTask(false);
    setNewTask("");
  }, []);

  useLayoutEffect(() => {
    socket.on("todos", (data) => {
      setTasks(data);
    });
  }, []);

  return (
    <SafeAreaView className="home flex-1 px-8 py-5">
      <View className="h-10">
        {addingTask ? (
          <View className="flex-row items-center">
            <BackBtn onPress={handleBack} />
            <TextInput
              value={newTask}
              onChangeText={setNewTask}
              placeholder="Type in the header..."
              className="font-medium text-3xl ml-6"
              onSubmitEditing={addTask}
              blurOnSubmit
            />
          </View>
        ) : (
          <Header />
        )}
      </View>
      <View className="mt-16">
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Task {...item} handleCheck={checkTask} />}
        />
      </View>
      <View className="absolute bottom-5 right-8">
        <AddBtn onPress={() => setAddingTask(true)} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
