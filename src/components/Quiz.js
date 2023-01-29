const Quiz = (props) => {
	return (
		<div class="h-screen w-screen lg:pl-80 px-4 py-1 font-serif text-xl">
			<button
				class="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-400"
				onClick={props.generateQuiz}
			>
				Generate Quiz
			</button>
			<h1>{props.quiz}</h1>
		</div>
	);
};

export default Quiz;
