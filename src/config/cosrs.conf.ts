import { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
	methods: ["GET", "POST", "PATCH", "DELETE"],
	origin: ["http://localhost:3000", "http://localhost:4200"],
	maxAge: 600,
};

export default corsOptions;
