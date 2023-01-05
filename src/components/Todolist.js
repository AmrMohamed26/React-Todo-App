import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Todo from "./Todo";
import Todoform from "./Todoform";

function Todolist() {
  const [todos, setTodos] = useState([]);

  // Add Todo Start

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  // Add Todo End

  // Remove Todo Start

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  // Remove Todo End

  // Update Todo Start

  const updateTodo = (id, value) => {
    if (!value.text || /^\s*$/.test(value.text)) {
      return;
    }

    setTodos((prev) => prev.map((item) => (item.id === id ? value : item)));
  };

  // Update Todo End

  // Mapping Start

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Mapping End

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>What's Your Plan for today?</h1>
        <Todoform onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default Todolist;
