import React from "react";

const LeaderCard = () => {
  const leaderList = [
    {
      name: "Michael Ade",
      position: "Frontend Developer",
      department: "Engineering",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Tolu Adebayo",
      position: "HR Manager",
      department: "Human Resources",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Chidi Nwosu",
      position: "Product Designer",
      department: "Design",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Chidi Nwosu",
      position: "Product Designer",
      department: "Design",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Chidi Nwosu",
      position: "Product Designer",
      department: "Design",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Chidi Nwosu",
      position: "Product Designer",
      department: "Design",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold ">OUR LEADERS</h1>
      <section className="m-auto mt-10 flex">
        {leaderList.map((l) => (
          <div className="max-w-xs bg-white rounded-2xl shadow-md overflow-hidden m-4">
            <img src={l.image} alt="pic" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{l.name}</h2>
              <p className="text-gray-600">
                <span className="font-semibold">Position:</span>
                {l.position}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Department:</span>
                {l.department}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LeaderCard;
