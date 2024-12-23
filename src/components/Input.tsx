import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

// const Input: React.FC<Props> = ({ todo, setTodo }) => {

const Input = ({ todo, setTodo }: Props) => {
  return (
    <form>
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder=" Enter your todo"
      />
      <button>Add</button>
    </form>
  );
};

export default Input;
