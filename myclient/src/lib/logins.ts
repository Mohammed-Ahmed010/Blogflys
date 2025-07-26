import type React from "react";
import { signIn, signUp } from "./auth-client";

export const handleGoogleLogin = async (
	e: React.MouseEvent<HTMLButtonElement>,
	successRoute?: () => void
) => {
	e.preventDefault();
	console.log("clicked");

	await signIn.social(
		{ provider: "google", callbackURL: "/home" },
		{
			onSuccess: () => {
				if (successRoute) successRoute();
			},
			onError: (error) => {
				console.error(error);
			},
		}
	);
};

export const handleSubmitSignin = async (
	data: { email: string; password: string },
	successRoute?: () => void
) => {
	try {
		// console.log({ email, password });
		await signIn.email(
			{
				email: data.email,
				password: data.password,
			},
			{
				onSuccess: () => {
					if (successRoute) successRoute();
				},
				onError: (error) => {
					console.error(error);
				},
			}
		);
	} catch {
		console.error("erroring Signing in");
	}
};
export const handleSubmitSignUp = async (
	data: { email: string; name: string; password: string },
	successRoute?: () => void
) => {
	try {
		// console.log({ email, password });
		await signUp.email(
			{
				email: data.email,
				password: data.password,
				name: data.name,
				roles: ["user"],
				callbackURL: "/home",
			},
			{
				onSuccess: () => {
					if (successRoute) successRoute();
				},
				onError: (error) => {
					console.error(error);
				},
			}
		);
	} catch {
		console.error("erroring Signing in");
	}
};
