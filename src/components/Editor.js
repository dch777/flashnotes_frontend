import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const FlashnotesEditor = (props) => {
	return (
		<div class="h-screen w-screen lg:pl-80 px-4 py-1 font-serif text-xl">
			<ReactQuill theme="snow" value={props.value} onChange={props.setValue} />
		</div>
	);
};

export default FlashnotesEditor;
