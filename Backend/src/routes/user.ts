import { Hono } from "hono";
import { authMiddleware } from "@/middlewares/auth";
import { getUserBlogs } from "@/controllers/index";
import { HonoEnv } from "@/types";

const userRouter = new Hono<HonoEnv>();

userRouter.use(authMiddleware);

userRouter.get("/getDetails", getUserBlogs);
