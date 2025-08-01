import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";

export const authClient = createAuthClient({
	plugins: [
		inferAdditionalFields({
			user: {
				roles: {
					type: "string[]",
				},
			},
		}),
	],
});
export function useCurrentUser() {
	const session = useSession();
	const user = session.data?.user;
	const isLoading = !session;
	const isAuthenticated = !!session.data?.user;
	return {
		user,
		isLoading,
		isAuthenticated,
	};
}

export const {
	useSession,
	signIn,
	signUp,
	signOut,
	forgetPassword,
	resetPassword,
} = authClient;

export type Session = typeof authClient.$Infer.Session;
export type User = typeof authClient.$Infer.Session.user;
