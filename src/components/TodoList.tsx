import React from "react";
import SingleTodo from "./SingleTodo";

interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="mt-4 mx-auto max-w-lg">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Your Todos</h2>
      <div className="space-y-2">
        {todos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
