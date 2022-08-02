import React, { useState } from "react";
import { RiTodoFill } from "react-icons/ri";
import { STodoList } from "./StyleTodoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskItem from "./TaskItem";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [store, setStore] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      toast.warning("Bạn chưa nhập thông tin!!!");
      return;
    }

    const newTask = {
      id: new Date(),
      name: inputValue,
      completed: false,
    };

    setStore([...store, newTask]);
    setInputValue("");
    toast.success("Bạn đã thêm thành công");
  };

  const handleChecked = (id) => {
    setStore(
      store.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDelete = (id) => {
    const currentTask = store.find((item) => item.id === id);
    if (!currentTask.completed) {
      toast.error("Chưa hoàn thành - không thể xóa!!!");
      return;
    }

    setStore(store.filter((item) => item.id !== id));
    toast.success("Bạn đã xóa thành công");
  };

  return (
    <STodoList>
      <h1 className="title">
        Todo List <RiTodoFill />
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ToastContainer />

      <div className="task">
        {store.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </STodoList>
  );
};

export default TodoList;
