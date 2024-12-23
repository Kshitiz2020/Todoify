import React from "react";
import { AiFillEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function SingleTodo({ todo, todos, setTodos }: Props) {
  return (
    <form>
      <div>
        <span>
          <AiFillEdit />
        </span>
        <span>
          <RiDeleteBin5Fill />
        </span>
        <span>
          <MdOutlineDone />
        </span>
      </div>
      <span>{todo.todo}</span>
    </form>
  );
}
export default SingleTodo;
