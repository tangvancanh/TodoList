import React from "react";
import { STaskItem } from "./StyleTaskItem";
import { RiDeleteBinLine } from "react-icons/ri";

const TaskItem = (props) => {
  const { task, handleChecked, handleDelete } = props;

  return (
    <STaskItem style={{ opacity: task.completed && "0.6" }}>
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => handleChecked(task.id)}
        />
        <span
          className="name"
          style={{ textDecoration: task.completed && "line-through" }}
        >
          {task.name}
        </span>
      </div>
      <div className="task-right" onClick={() => handleDelete(task.id)}>
        <RiDeleteBinLine fontSize="25px" />
      </div>
    </STaskItem>
  );
};

export default TaskItem;
