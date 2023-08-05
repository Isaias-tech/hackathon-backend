import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/../.env` });

import app from "./app";
import { PORT } from "./utils/constants";
import AppDataSource from "./config/data-source";


const application = async () => {
    try {
        await AppDataSource.initialize();
        console.log("The DB has been initialized.");
    } catch (error) {
        console.error("An error has occurred during the DB initialization.", error);
    }
    if (AppDataSource.isInitialized) {
        app.listen(PORT, () => {
            console.log(`The application is running on: http://localhost:${PORT}`);
        });
    }
};

(async () => {
    if (process.env.ENVIRON != "test") {
        await application();
    }
})();