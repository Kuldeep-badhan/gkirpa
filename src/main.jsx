import React from "react";
import ReactDOM from "react-dom/client";
import CheckStudent from "./CheckStudent.jsx";
import StudentRecord from "./StudentRecord.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Course from "./Course.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/checkstudent",
		element: <CheckStudent />,
	},
	{
		path: "/checkstudent/:id",
		element: <StudentRecord />,
	},
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/course",
		element: <Course />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Header />
		<RouterProvider router={router} />
		<Footer />
	</React.StrictMode>
);
