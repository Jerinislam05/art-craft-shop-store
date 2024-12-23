import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./providers/AuthProviders";
import { useState } from "react";

const Navbar = () => {
	const { user, logOut } = useAuth();
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	console.log(pathname);

	const handleLogout = async () => {
		await logOut();
		navigate("/");
	};

	return (
		<div className="w-full bg-[#00000020] text-white absolute top-0 z-50 py-6">
			<div className="navbar container mx-auto">
				{/* Navbar Start */}
				<div className="navbar-start">
					{/* Dropdown Menu for Mobile */}
					<div className="dropdown">
						<button
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</button>

						{/* Dropdown Items */}
						{isMenuOpen && (
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-amber-900 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
							>
								<li>
									<Link
										to="/"
										onClick={() => setIsMenuOpen(false)}
										className={
											pathname == "/" ? "active" : ""
										}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										to="/allcraft"
										onClick={() => setIsMenuOpen(false)}
										className={
											pathname == "/allcraft"
												? "active"
												: ""
										}
									>
										All Art & Craft Items
									</Link>
								</li>
								<li>
									<Link
										to="/addcraft"
										onClick={() => setIsMenuOpen(false)}
										className={
											pathname == "/addcraft"
												? "active"
												: ""
										}
									>
										Add Craft Item
									</Link>
								</li>
								<li>
									<Link
										to="/myartcraftlist"
										onClick={() => setIsMenuOpen(false)}
										className={
											pathname == "/myartcraftlist"
												? "active"
												: ""
										}
									>
										My Art & Craft List
									</Link>
								</li>
							</ul>
						)}
					</div>

					{/* Logo */}
					<Link to="/" className="btn btn-ghost text-xl">
						CraftyCreations
					</Link>
				</div>

				{/* Navbar Center (For Desktop) */}
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link
								to="/"
								className={pathname == "/" ? "active" : ""}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/allcraft"
								className={
									pathname == "/allcraft" ? "active" : ""
								}
							>
								All Art & Craft Items
							</Link>
						</li>
						<li>
							<Link
								to="/addcraft"
								className={
									pathname == "/addcraft" ? "active" : ""
								}
							>
								Add Craft Item
							</Link>
						</li>
						<li>
							<Link
								to="/myartcraftlist"
								className={
									pathname == "/myartcraftlist"
										? "active"
										: ""
								}
							>
								My Art & Craft List
							</Link>
						</li>
					</ul>
				</div>

				{/* Navbar End */}
				<div className="navbar-end">
					{!user ? (
						<>
							<button
								onClick={() => navigate("/login")}
								className="btn btn-ghost"
							>
								Login
							</button>
							<button
								onClick={() => navigate("/register")}
								className="btn btn-ghost"
							>
								Register
							</button>
						</>
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
								className="btn bg-orange-600 hover:bg-orange-800 text-white"
							>
								Log out
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
