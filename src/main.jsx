import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllCraft from "./components/AllCraft.jsx";
import AddCraft from "./components/AddCraft.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProviders from "./components/providers/AuthProviders.jsx";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home.jsx";
import ViewDetails from "./components/ViewDetails.jsx";
import MyArtCraftList from "./components/MyArtCraftList.jsx";
import UpdateArtCraft from "./components/UpdateArtCraft.jsx";
import NotFound from "./components/NotFound.jsx";
import Category from "./components/Category.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		children: [
			{
				index: true,
				element: <Home></Home>,
				loader: () => fetch("http://localhost:5000/craft"),
			},
			{
				path: "allcraft",
				element: <AllCraft></AllCraft>,
				loader: () => fetch("http://localhost:5000/allcraft"),
			},
			{
				path: "categories/:category",
				element: <Category></Category>,
				loader: ({ params }) =>
					fetch(
						`http://localhost:5000/categories/${params.category}`
					),
			},
			{
				path: "addcraft",
				element: (
					<ProtectedRoute>
						<AddCraft />
					</ProtectedRoute>
				),
			},
			{
				path: "updateartcraft/:id",
				element: <UpdateArtCraft></UpdateArtCraft>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/craft/${params.id}`),
			},
			{
				path: "myartcraftlist",
				element: (
					<ProtectedRoute>
						<MyArtCraftList />
					</ProtectedRoute>
				),
				loader: () => fetch("http://localhost:5000/craft"),
			},
			{
				path: "register",
				element: <Register></Register>,
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "details/:id",
				element: <ViewDetails></ViewDetails>,
				loader: async ({ params }) => {
					const response = await fetch(
						`http://localhost:5000/craft/${params.id}`
					);
					if (!response.ok) {
						throw new Error("Failed to fetch craft details");
					}
					return response.json();
				},
				errorElement: (
					<div className="p-4">
						<h1 className="text-xl font-bold text-red-600">
							Error
						</h1>
						<p>
							Could not fetch the craft details. Please try again
							later.
						</p>
					</div>
				),
			},
			{
				path: "*",
				element: <NotFound></NotFound>,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProviders>
			<RouterProvider router={router} />
			<Toaster position="top-center" />
		</AuthProviders>
	</StrictMode>
);
