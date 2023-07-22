import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/../.env.local` });

import app from "./app";
import { PORT } from "./utils/constants";

app.listen(PORT, () => {
	console.log(`The app is running on: http://localhost:${PORT}`);
});
