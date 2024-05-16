import "./App.css";
import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import postsDataArray from "./data/postsData.json";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	localStorage.setItem("posts", JSON.stringify(postsDataArray));

	// TODO: create a theme changer, i.e. two distinct themes
	const [isDarkThemeOn, setDarkTheme] = useState(false);
	const [isUserLoggedIn, setUserLoggedIn] = useState(false);

	const changeTheme = () => {
	setDarkTheme(!isDarkThemeOn);
	};

	return (
	<Router>
		<Header
			isUserLoggedIn={isUserLoggedIn}
			isDarkThemeOn={isDarkThemeOn}
			changeTheme={changeTheme}
		/>
		<Routes>
		<Route path="/" element={<Homepage />} />
		<Route path="/about" element={<About />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="/post/1" element={<Single/>} />
		<Route path="/write" element={isUserLoggedIn ? <Write /> : <Login />} />
		<Route
			path="/settings"
			element={isUserLoggedIn ? <Settings /> : <Login />}
		/>
		<Route
			path="/login"
			element={isUserLoggedIn ? <Homepage /> : <Login />}
		/>
		<Route
			path="/register"
			element={isUserLoggedIn ? <Homepage /> : <Register />}
		/>
		</Routes>
	</Router>
	);
};

export default App;
