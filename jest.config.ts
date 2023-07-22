import { Config } from "jest";

const config: Config = {
	verbose: true,
	detectOpenHandles: true,
	preset: "ts-jest",
	testEnvironment: "node",
};

export default config;
