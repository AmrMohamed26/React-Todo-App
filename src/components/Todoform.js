import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Todoform(props) {
  const [input, setInput] = useState("");

  // Focus on bar when reload start

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  // Focus on bar when reload end

  // Make page not reload when clicking button start

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });

    setInput("");
  };

  // Make page not reload when clicking button end

  return (
    // Form Start
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          {/* Update button start */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSubmit}
            className="todo-button edit"
          >
            Update
          </motion.button>
          {/* Update button end */}
        </>
      ) : (
        <>
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          {/* Add Todo button start */}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSubmit}
            className="todo-button"
          >
            Add todo
          </motion.button>
          {/* Add Todo button end */}
        </>
      )}
    </form>
    // Form End
  );
}

export default Todoform;
