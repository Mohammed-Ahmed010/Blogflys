import { signIn } from "../lib/auth-client";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();
	const handleGoogleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await signIn.social(
			{ provider: "google" },
			{
				onSuccess: () => {
					navigate("/done");
				},
				onError: (error) => {
					console.error(error);
				},
			}
		);
	};

	return (
		<>
			pofopsdjfopdsjpfojp
			<div>HOME</div>
			<form onSubmit={handleGoogleLogin}>
				<button type='submit'>Login with Google</button>
			</form>
		</>
	);
}
