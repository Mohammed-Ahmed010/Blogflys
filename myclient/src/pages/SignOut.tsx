import SignOutForm from "@/components/signout-form";

export default function SignOut() {
	return (
		<>
			<div className='bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10'>
				<div className='w-full max-w-sm'>
					<SignOutForm />
				</div>
			</div>
		</>
	);
}
