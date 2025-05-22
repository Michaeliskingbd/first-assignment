import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import User from "./pages/User";
import Products from "./pages/Products";

import PostPage from "./pages/PostPage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { UserProvider } from "./context/UserContext";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Counter from "./pages/Counter";

function App() {
  const [firstName, setFirstName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  return (
    <>
      <Provider store={store}>
        <UserProvider>
          <Navbar firstName={firstName} userEmail={userEmail} />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/login"
              element={
                <Login
                  setFirstName={setFirstName}
                  setUserEmail={setUserEmail}
                />
              }
            />
            <Route path="/reg" element={<Registration />} />
            <Route path="/user" element={<User />} />
            <Route path="/products" element={<Products />} />
            <Route path="/posts" element={<PostPage />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </UserProvider>
      </Provider>
    </>
  );
}

export default App;
