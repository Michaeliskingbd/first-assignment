import React from "react";

const Example = ({ firstParagraph, secondParagraph, text }) => {
  return (
    <div className="w-[400px] p-4 shadow-lg ">
      <p>{firstParagraph}</p>
      <p>{secondParagraph}</p>
      <button className="bg-blue-600 text-white px-4 py-1">{text}</button>
    </div>
  );
};

export default Example;
