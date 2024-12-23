import React, { useState } from "react";
import Input from "./components/Input";
import { Todo } from "./model";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
      <span> Todoify</span>
      <Input todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
