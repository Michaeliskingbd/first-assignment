import React from "react";

const StaffCard = ({ name, postion, department, image }) => {
  return (
    <section className="m-auto">
      <div className="max-w-xs bg-white rounded-2xl shadow-md overflow-hidden m-4">
        <img src={image} alt="pic" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600">
            <span className="font-semibold">Position:</span>
            {postion}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Department:</span>
            {department}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StaffCard;
