import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";

type Todo = {
  id: number;
  todo: string;
  isDone: boolean;
};

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number) => {
    if (edit && editTodo) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, todo: editTodo } : todo
        )
      );
      setEdit(false);
    }
  };

  return (
    <form
      className="flex items-center justify-between bg-white p-4 rounded shadow mb-2"
      onSubmit={(e) => {
        e.preventDefault();
        handleEdit(todo.id);
      }}
    >
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="flex-grow border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
      ) : todo.isDone ? (
        <s className="flex-grow text-gray-500">{todo.todo}</s>
      ) : (
        <span className="flex-grow text-gray-700">{todo.todo}</span>
      )}

      <div className="flex items-center space-x-2">
        <span
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
          className="text-blue-500 cursor-pointer hover:text-blue-600"
        >
          <AiFillEdit size={20} />
        </span>
        <span
          onClick={() => handleDelete(todo.id)}
          className="text-red-500 cursor-pointer hover:text-red-600"
        >
          <RiDeleteBin5Fill size={20} />
        </span>
        <span
          onClick={() => handleDone(todo.id)}
          className="text-green-500 cursor-pointer hover:text-green-600"
        >
          <MdOutlineDone size={20} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
