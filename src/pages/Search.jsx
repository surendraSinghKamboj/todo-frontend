import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { host } from "../../config";

const Search = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const [data, setData] = useState([]);
	const [current, setCurrent] = useState([]);
	const [stat, setStat] = useState(0);

	const handleSubmit = () => {
		setCurrent([...current, { title, desc }]);
		setTitle("");
		setDesc("");
		setSearchTerm("");
	};

	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get(`${host}task/read`, {
					headers: { "Content-Type": "Application/json" },
					withCredentials: true,
				});
				if (response) {
					console.log(response.data.data);
					setCurrent(response.data.data);
				}
			} catch (error) {
				console.log(error);
			}
		}
		getData();
	}, []);

	// Search bar logic
	useEffect(() => {
		// main Logic
		if (searchTerm) {
			const regex = new RegExp(searchTerm, "i");
			const newData = current.filter((item) => {
				return regex.test(item.title) || regex.test(item.description);
			});
			setData(newData);
		} else {
			setData([...current]);
		}
	}, [searchTerm, current]);

	const updateTask = async (id) => {
		try {
			const response = await axios.put(`${host}task/${id}`, {
				isCompleted: true,
			});
			if (response) {
				toast.info("Update Success");
			}
		} catch (error) {
			toast.error("Update Request failed");
			console.log(error);
		}
	};

	const deleteTask = async (id) => {
		try {
			const response = await axios.delete(`${host}task/${id}`);
			if (response) {
				toast.info("Delete Success");
			}
		} catch (error) {
			toast.error("Delete Request failed");
			console.log(error);
		}
	};

	return (
		<>
			<ToastContainer />
			<div className="flex flex-col justify-center items-center gap-2">
				<p>Create task</p>
				<input
					className="w-80 h-8 text-2xl border-2 px-2"
					type="text"
					name="title"
					value={title}
					placeholder="Title"
					onChange={(e) => setTitle(e.target.value)}
				/>

				<input
					className="w-80 h-8 text-2xl border-2 px-2"
					type="text"
					name="description"
					value={desc}
					placeholder="Description"
					onChange={(e) => setDesc(e.target.value)}
				/>
				<button
					onClick={handleSubmit}
					className="border-2 px-3 active:bg-lime-400 bg-slate-400 rounded-md"
				>
					Save
				</button>
			</div>
			<div className="w-[80%] m-auto mt-3 border-t-2 pt-4">
				<input
					className="w-80 h-8 text-2xl border-2 px-2"
					type="text"
					name="searchTerm"
					value={searchTerm}
					placeholder="Search here..."
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
			<div className="w-[80%] m-auto mt-3 border-t-2 flex justify-center items-center flex-wrap gap-3 pt-4">
				{data.length === 0 ? (
					<div>
						<h3>You do not have any task</h3>
					</div>
				) : (
					data.map(({ title, description, _id, isCompleted }, index) => (
						<div
							key={index}
							className={`sm:w-[45%] pb-4 ${
								isCompleted ? "bg-green-200" : "bg-slate-200"
							} h-16 relative`}
						>
							<h4 className="mt-2 pl-2 text-lg text-lime-700 w-full border-b-red-500 border-b-2">
								{title}
							</h4>
							<h5 className="pl-2 text-base text-black w-full ">
								{description}
							</h5>
							<div className="absolute flex gap-2 right-1 top-0">
								<button onClick={() => updateTask(_id)}>Update</button>
								<button onClick={() => deleteTask(_id)}>Delete</button>
							</div>
						</div>
					))
				)}
			</div>
		</>
	);
};

export default Search;
