import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-[150px] flex  gap-5 ">
      <div className="w-[200px]  flex justify-between">
        <button
          className="bg-red-400 hover:bg-red-300 px-6 py-1 rounded-md text-xl text-white"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className=" text-center text-2xl w-10">{count}</span>
        <button
          className="bg-green-400 hover:bg-green-300 px-6 py-1 rounded-md text-xl text-white"
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <button
          className="hover:border-b-2  border-gray-600"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Counter;
