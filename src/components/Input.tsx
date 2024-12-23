import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

// const Input: React.FC<Props> = ({ todo, setTodo }) => {

const Input = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(e) => handleAdd(e)}>
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder=" Enter your todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Input;
