import { useState } from "react";
import "./kanghyun.css";

function Kanghyun() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([input.trim(), ...todos]);
    setInput("");
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <input
        type="text"
        value={input}
        placeholder="할 일을 입력하세요"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Kanghyun;
