import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Editor from "./components/Editor";
import Quiz from "./components/Quiz";

import { Configuration, OpenAIApi } from "openai";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState({});
	const [refreshKey, refresh] = useState("");
	const [value, setValue] = useState("");
	const [quiz, setQuiz] = useState("Generating Quiz");

	const configuration = new Configuration({
		apiKey: "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",
	});
	const openai = new OpenAIApi(configuration);

	const generateQuiz = () => {
		console.log(value);
		openai
			.createCompletion({
				model: "text-davinci-003",
				max_tokens: 2000,
				temperature: 0.7,
				prompt:
					"Make a multiple-choice quiz with an answer key based on notes. Make sure to list all questions, and then all answers with explanations. Here are the notes:" +
					value +
					"End of notes.",
			})
			.then((quiz) => {
				setQuiz(quiz.data.choices[0].text);
				console.log(quiz);
			});
	};

	useEffect(() => {
		axios
			.get("/auth/data")
			.then((res) => {
				setUser(res.data);
				setLoggedIn(true);
			})
			.catch((err) => {
				setLoggedIn(false);
			});
	}, [refreshKey]);

	return (
		<div class="flex w-screen h-screen divide-x-4">
			<Navbar refresh={refresh} loggedIn={loggedIn} user={user} />
			<div class="p-l-96">
				<Routes>
					<Route
						path="/"
						element={<Editor value={value} setValue={setValue} />}
					/>
					<Route
						path="/login"
						element={
							<Login refresh={refresh} loggedIn={loggedIn} user={user} />
						}
					/>
					<Route
						path="/signup"
						element={
							<Signup refresh={refresh} loggedIn={loggedIn} user={user} />
						}
					/>
					<Route
						path="/quiz"
						element={
							<Quiz
								refresh={refresh}
								loggedIn={loggedIn}
								user={user}
								quiz={quiz}
								generateQuiz={generateQuiz}
							/>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
