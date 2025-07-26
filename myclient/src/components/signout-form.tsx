import { GalleryVerticalEnd } from "lucide-react";
import { signOut } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function SignOutForm() {
	const navigate = useNavigate();
	const logout = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await signOut();
			navigate("/");
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};
	return (
		<>
			{" "}
			<div className={cn("flex flex-col gap-6")}>
				<form onSubmit={logout}>
					<div className='flex flex-col gap-6'>
						<div className='flex flex-col items-center gap-2'>
							<a className='flex flex-col items-center gap-2 font-medium'>
								<div className='flex size-8 items-center justify-center rounded-md'>
									<GalleryVerticalEnd className='size-6' />
								</div>
								<span className='sr-only'>Blogify.</span>
							</a>
							<h1 className='text-xl font-bold'>
								Are you Sure want to log out ?.
							</h1>
							<div className='text-center text-sm'>
								Go back to{" "}
								<a
									href='/home'
									className='underline underline-offset-4'
								>
									home
								</a>
							</div>
						</div>
						<div className='flex flex-col gap-6'>
							<Button type='submit' className='w-full'>
								logout
							</Button>
						</div>
						<div className='after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'></div>
					</div>
				</form>
			</div>
		</>
	);
}
