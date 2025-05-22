import React from "react";
import { useUser } from "../context/UserContext";

const userData = {
  users: [
    {
      id: 1,
      firstName: "Emily",
      lastName: "Johnson",
      maidenName: "Smith",
      age: 28,
      gender: "female",
      email: "emily.johnson@x.dummyjson.com",
      phone: "+81 965-431-3024",
      username: "emilys",
      password: "emilyspass",
      birthDate: "1996-5-30",
      image: "https://dummyjson.com/icon/emilys/128",
    },
    {
      id: 1,
      firstName: "Emily",
      lastName: "Johnson",
      maidenName: "Smith",
      age: 28,
      gender: "female",
      email: "emily.johnson@x.dummyjson.com",
      phone: "+81 965-431-3024",
      username: "emilys",
      password: "emilyspass",
      birthDate: "1996-5-30",
      image: "https://dummyjson.com/icon/emilys/128",
    },
    {
      id: 1,
      firstName: "Emily",
      lastName: "Johnson",
      maidenName: "Smith",
      age: 28,
      gender: "female",
      email: "emily.johnson@x.dummyjson.com",
      phone: "+81 965-431-3024",
      username: "emilys",
      password: "emilyspass",
      birthDate: "1996-5-30",
      image: "https://dummyjson.com/icon/emilys/128",
    },
  ],
};

function UserCard() {
  const firstname = useUser();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        {userData.users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-2xl shadow-md flex gap-4 items-center"
          >
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm text-gray-600">Username: {user.username}</p>
              <p className="text-sm text-gray-600">Email: {user.email}</p>
              <p className="text-sm text-gray-600">Phone: {user.phone}</p>
              <p className="text-sm text-gray-600">
                Birth Date: {user.birthDate}
              </p>
              <p className="text-sm text-gray-600">
                Age: {user.age} | Gender: {user.gender}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCard;
