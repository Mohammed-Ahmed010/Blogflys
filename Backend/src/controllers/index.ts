import { Context } from "hono";
import prisma from "@/lib/db";

export async function getUserBlogs(c: Context) {
	const user = c.get("user");
	console.log(user);
	return c.json({ user: user });
}
