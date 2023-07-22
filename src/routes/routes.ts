import { Request, Response, Router } from "express";

const router = Router();

router.use("", (req: Request, res: Response) => {
	res.json({message: "The app is running."})
});

export default router;