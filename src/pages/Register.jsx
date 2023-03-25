import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { host } from "../../config";

const Register = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		mobile: "",
		password: "",
	});

	const handleChange = (e) =>
		setData({ ...data, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${host}user/register`, data, {
				headers: { "Content-Type": "Application/json" },
				withCredentials: true,
			});
			if (response) {
				alert("Account Created");
				toast.success("Account Created Successfully");
			}
		} catch (error) {
			console.log(error);
			toast.error("Somthing fault in Login");
		}
	};

	return (
		<div className="w-full h-[100vh] flex justify-center items-center ">
			<ToastContainer />
			<form
				onSubmit={handleSubmit}
				className="w-[100vw] pt-4 h-[100vh] sm:h-[70vh] shadow-neutral-900 shadow-md sm:w-[50vw] flex justify-center items-center flex-col gap-3"
			>
				<input
					type="text"
					name="name"
					placeholder="Enter your name"
					className="w-[80%] h-8 text-xl"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="email"
					placeholder="Enter your email"
					className="w-[80%] h-8 text-xl"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="mobile"
					placeholder="Enter your mobile"
					className="w-[80%] h-8 text-xl"
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Enter your password"
					className="w-[80%] h-8 text-xl"
					onChange={handleChange}
				/>
				<input
					type="Submit"
					value={"Register"}
					readOnly
					className="cursor-pointer border-2 rounded-md px-2 hover:bg-lime-300"
				/>

				<div className="mt-2 w-[80%] m-auto">
					Already Registered <Link href={"/Login"}>Login now</Link>
				</div>
			</form>
		</div>
	);
};

export default Register;
