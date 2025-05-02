import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(false);
  const [sucessMessage, setSuccessMessage] = useState(false);
  const [showpassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showpassword);
  };

  const Verify = (e) => {
    e.preventDefault();
    if (email && password && isChecked) {
      console.log(email, password, isChecked);
      setSuccessMessage(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={Verify} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showpassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.value)}
          />

          {error && (
            <p className="text-red-600">Please fill in all credentials</p>
          )}
          {sucessMessage && (
            <p className="text-green-600">Logged in successfully</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-600">
          <a href="#" className="hover:underline">
            Forgot password?
          </a>{" "}
          |
          <a href="#" className="hover:underline ml-2">
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
