import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { host } from "../../config";

const Login = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) =>
		setData({ ...data, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${host}user/login`, data, {
				headers: { "Content-Type": "Application/json" },
				withCredentials: true,
			});
			if (response) {
				toast.success(response.data.message);
			}
		} catch (error) {
            toast.error("somthing fault")
        }
	};

	return (
		<div className="w-full h-[100vh] flex justify-center items-center ">
			<ToastContainer className="absolute top-1 left-2" autoClose={2000} />
			<form
				onSubmit={handleSubmit}
				className="w-[100vw] pt-4 h-[100vh] sm:h-[70vh] shadow-neutral-900 shadow-md sm:w-[50vw] flex justify-center items-center flex-col gap-3"
			>
				<input
					type="text"
					name="email"
					placeholder="Enter your email"
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
					value={"Login"}
					readOnly
					className="cursor-pointer border-2 rounded-md px-2 hover:bg-lime-300"
				/>
				<div className="mt-2 w-[80%] m-auto">
					New User <Link href={"/Register"}>Register now</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
