import React from 'react';
import StaffCard from './StaffCard';

const staffList = [
  {
    name: "Michael Ade",
    position: "Frontend Developer",
    department: "Engineering",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Tolu Adebayo",
    position: "HR Manager",
    department: "Human Resources",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Chidi Nwosu",
    position: "Product Designer",
    department: "Design",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

function App() {
  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100">
      {staffList.map((staff, index) => (
        <StaffCard
          key={index}
          name={staff.name}
          position={staff.position}
          department={staff.department}
          image={staff.image}
        />
      ))}
    </div>
  );
}

export default App;
