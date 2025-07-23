import { createMiddleware } from "hono/factory";
import { auth } from "../lib/auth";
import { HonoEnv } from "../types";

const authMiddleware = createMiddleware<HonoEnv>(async (c, next) => {
	const session = await auth.api.getSession({
		headers: c.req.raw.headers,
	});

	if (!session) {
		return c.json({ error: "UnAuthorized" });
	}

	c.set("user", session.user);
	c.set("session", session.session);
	return next();
});

// app.use("*", async (c, next) => {
// 	const session = await auth.api.getSession({ headers: c.req.raw.headers });

// 	if (!session) {
// 		c.set("user", null);
// 		c.set("session", null);
// 		return next();
// 	}

// 	c.set("user", session.user);
// 	c.set("session", session.session);
// 	return next();
// });
