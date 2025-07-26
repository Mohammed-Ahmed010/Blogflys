import { useCurrentUser } from "@/lib/auth-client";

export default function Home() {
	const { user, isLoading } = useCurrentUser();
	if (isLoading) {
		return <>Loading</>;
	}
	return (
		<>
			Home {user?.name} {user?.email}
		</>
	);
}
