"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { host } from "../../config";

const Create = () => {
	const [data, setData] = useState({
		title: "",
		description: "",
	});

	const handleChange = (e) =>
		setData({ ...data, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.post(`${host}task/create`, data, {
			headers: { "Content-Type": "Application/json" },
			withCredentials: true,
		});
		if (response) {
			toast.success(response.data.message);
		}
	};

	return (
		<div className="w-full h-[100vh] flex justify-center items-center ">
			<ToastContainer className="absolute top-1 left-2" />
			<form
				onSubmit={handleSubmit}
				className="w-[100vw] pt-4 h-[100vh] sm:h-[70vh] shadow-neutral-900 shadow-md sm:w-[50vw] flex justify-center items-center flex-col gap-3"
			>
				<input
					type="text"
					name="title"
					placeholder="Enter your task title"
					className="w-[80%] h-8 text-xl"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="description"
					placeholder="Enter your description here"
					className="w-[80%] h-8 text-xl"
					onChange={handleChange}
				/>
				<input
					type="Submit"
					value={"Create"}
					readOnly
					className="cursor-pointer border-2 rounded-md px-2 hover:bg-lime-300"
				/>
			</form>
		</div>
	);
};

export default Create;
