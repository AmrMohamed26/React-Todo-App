import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";

import { TiEdit } from "react-icons/ti";
import Todoform from "./Todoform";

// Edit Function Start

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Todoform edit={edit} onSubmit={submitUpdate} />;
  }

  // Edit Function End

  // Mapping Start

  return todos.map((todo, index) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      {/* Text inside the todo start */}

      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      {/* Text inside the todo end */}

      {/* Icons start */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="icons"
      >
        {/* Remove Todo Start */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
        </motion.div>

        {/* Remove Todo End */}

        {/* Edit Todo Start */}

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        </motion.div>

        {/* Edit Todo End */}
      </motion.div>
      {/* Icons end */}
    </motion.div>
    // Mapping End
  ));
}

export default Todo;
