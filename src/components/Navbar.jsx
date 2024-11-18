import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "./providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between bg-[#93A661] p-4 text-white">
      <div className="text-2xl font-bold">
        <Link to="/">Art & Craft</Link>
      </div>

      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li>
          <Link to="/allcraft" className="">
            All Art & Craft Items
          </Link>
        </li>
        <li>
          <Link to="/addcraft" className="">
            Add Craft Item
          </Link>
        </li>
        <li>
          <Link to="/mylist" className="">
            My Art & Craft List
          </Link>
        </li>
      </ul>

      <div>
        {!user ? (
          <div className="space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
            >
              Register
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-10 h-10 rounded-full cursor-pointer"
              />

              <span className="absolute left-0 hidden px-2 py-1 mt-2 text-sm bg-gray-800 rounded-md text-white group-hover:block">
                {user.displayName}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
