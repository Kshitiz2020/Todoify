import React, { useState } from "react";
import Input from "./components/Input";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  return (
    <div>
      <span> Todoify</span>
      <Input todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
