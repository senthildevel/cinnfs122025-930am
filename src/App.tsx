import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/cinnfs122025-930am">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cinnfs122025-930am/users">
              User List
            </NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="/cinnfs122025-930am" element={<Home />} />
          <Route path="/cinnfs122025-930am/users" element={<UserList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
