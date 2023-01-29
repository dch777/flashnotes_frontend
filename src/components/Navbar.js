import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = (props) => {
	const navigate = useNavigate();

	const logout = () => {
		axios.get("/auth/logout").then(() => {
			navigate("/");
			props.refresh("logout");
		});
	};

	if (props.loggedIn) {
		return (
			<div class="hidden lg:inline absolute lg:w-80 h-screen border-r-3 bg-gray-100">
				<div class="flex flex-col items-center pt-64 p-6 h-screen w-full">
					<Link
						to="/"
						class="w-full font-serif font-bold text-5xl text-gray-600 hover:text-gray-400 mb-8"
					>
						Flashnotes
					</Link>
					<Link
						to="/quiz"
						class="w-full font-serif text-3xl text-gray-600 hover:text-gray-400 mb-2"
					>
						Quiz
					</Link>
					<Link
						to="/"
						class="w-full font-serif text-3xl text-gray-600 hover:text-gray-400 mb-2"
					>
						Notes
					</Link>
					<button
						onClick={logout}
						class="w-full font-serif text-3xl text-gray-600 hover:text-gray-400 mb-8 text-left"
					>
						Log Out
					</button>
				</div>
			</div>
		);
	} else {
		return (
			<div class="hidden lg:inline absolute lg:w-80 h-screen border-r-3 bg-gray-100">
				<div class="flex flex-col items-center pt-64 p-6 h-screen w-full">
					<Link
						to="/"
						class="w-full font-serif font-bold text-5xl text-gray-600 hover:text-gray-400 mb-8"
					>
						Flashnotes
					</Link>
					<Link
						to="/login"
						class="w-full font-serif text-3xl text-gray-600 hover:text-gray-400 mb-2"
					>
						Login
					</Link>
					<Link
						to="/signup"
						class="w-full font-serif text-3xl text-gray-600 hover:text-gray-400 mb-2"
					>
						Sign Up
					</Link>
				</div>
			</div>
		);
	}
};

export default Navbar;
