const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const PORT = 4000;
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const generateID = () => Math.random().toString(36).substring(2, 10);

let todoList = [
  { id: "1", title: "This is the Task No. 1", checked: true },
  { id: "2", title: "This is the Task No. 2", checked: false },
  { id: "3", title: "This is the Task No. 3", checked: true },
  { id: "4", title: "This is the Task No. 4", checked: false },
  { id: "5", title: "This is the Task No. 5", checked: false },
];

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.emit("todos", todoList);

  socket.on("addTodo", (todo) => {
    todoList.unshift({ id: generateID(), title: todo, comments: [] });
    socket.emit("todos", todoList);
  });

  socket.on("deleteTodo", (id) => {
    let result = todoList.filter((todo) => todo.id !== id);
    todoList = result;
    socket.emit("todos", todoList);
  });

  socket.on("disconnect", () => {
    socket.disconnect();
    console.log("🔥: A user disconnected");
  });
});

app.get("/todos", (req, res) => {
  res.json(todoList);
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
