import { useState } from "react";
import "./kanghyun.css";

function KanghyunTodo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setTodos([trimmed, ...todos]);
    setInput("");
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1>My To Dos ({todos.length})</h1>
      <div className="todo-input-wrapper">
        <input
          type="text"
          placeholder="Write your to do..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add To Do</button>
      </div>
      <hr />
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo}</span>
            <button className="remove" onClick={() => removeTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KanghyunTodo;
