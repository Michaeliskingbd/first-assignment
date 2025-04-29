import { useState } from "react";

function User() {
  const [count, setCount] = useState(0);

  const Add = () => {
    setCount(count + 1);
  };
  const Remove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const Reset = () => {
    setCount(0);
  };
  return (
    <div className="p-[200px] w-fit flex gap-3">
      <button
        onClick={Remove}
        className=" py-2 px-6 bg-red-400 rounded-md text-white font-semibold shadow-lg hover:bg-red-300 "
      >
        Remove
      </button>
      <span className="text-3xl font-bold">{count}</span>
      <button
        onClick={Add}
        className=" py-2 px-6 bg-green-400 rounded-md text-white font-semibold shadow-lg hover:bg-green-300"
      >
        Add
      </button>

      {count > 0 && (
        <button
          onClick={Reset}
          className=" py-2 px-6 bg-blue-400 rounded-md text-white font-semibold shadow-lg hover:bg-blue-300"
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default User;
