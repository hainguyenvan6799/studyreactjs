import React from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";
import ToDoForm from "../ToDoForm";

function ToDo() {
  const [toDoList, setToDoList] = React.useState([
    {
      id: uuidv4(),
      title: "Test 1",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Test 2",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Test 3",
      completed: false,
    },
  ]);

  const markComplete = (id) => {
    const newData = toDoList.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setToDoList(newData);
  };

  const deleteToDo = (index) => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDoList(newToDoList);
  };

  const handleToDoFormSubmit = (formValues) => {
    console.log(formValues);
  };

  const main = () => (
    <div>
      <h2>Danh sách những việc cần làm</h2>
      <ToDoForm onSubmit={handleToDoFormSubmit} />
      <ToDoList
        toDoList={toDoList}
        markComplete={markComplete}
        deleteToDo={deleteToDo}
      />
    </div>
  );

  return main();
}

export default ToDo;
