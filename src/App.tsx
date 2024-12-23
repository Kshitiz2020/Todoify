import React, { useState } from "react";
import Input from "./components/Input";
import Todo from "./model";
import TodoList from "./components/TodoList";
import "./index.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // function to add todo
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center p-4">
      <span className="text-4xl font-bold text-blue-600 mb-6">Todoify</span>
      <div className="w-full max-w-md">
        <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
