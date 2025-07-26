import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleGoogleLogin, handleSubmitSignUp } from "@/lib/logins";
export default function SignUpForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	// 	e: React.MouseEvent<HTMLButtonElement>
	// ) => {
	// 	e.preventDefault();
	// 	console.log("clicked");

	// 	await signIn.social(
	// 		{ provider: "google", callbackURL: "/home" },
	// 		{
	// 			onSuccess: () => {
	// 				navigate("/home");
	// 			},
	// 			onError: (error) => {
	// 				console.error(error);
	// 			},
	// 		}
	// 	);
	// };
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleSubmitSignUp({ email, name, password }, () => navigate("/home"));
	};

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle>Create a New Account</CardTitle>
					<CardDescription>
						Enter your email below to create a new account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit}>
						<div className='flex flex-col gap-6'>
							<div className='grid gap-3'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									placeholder='m@example.com'
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className='grid gap-3'>
								<Label htmlFor='email'>Name</Label>
								<Input
									id='name'
									type='name'
									onChange={(e) => setName(e.target.value)}
									placeholder='deeni ladka'
									required
								/>
							</div>
							<div className='grid gap-3'>
								<div className='flex items-center'>
									<Label htmlFor='password'>Password</Label>
								</div>
								<Input
									id='password'
									type='password'
									required
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</div>
							<div className='flex flex-col gap-3'>
								<Button type='submit' className='w-full'>
									Sign up
								</Button>
								<Button
									onClick={(e) =>
										handleGoogleLogin(e, () =>
											navigate("/home")
										)
									}
									variant='outline'
									className='w-full'
								>
									Sign up with Google
								</Button>
							</div>
						</div>
						<div className='mt-4 text-center text-sm'>
							Already have an account?{" "}
							<a
								href='/login'
								className='underline underline-offset-4'
							>
								login
							</a>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
