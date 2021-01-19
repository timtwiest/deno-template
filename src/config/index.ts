import { config } from "../deps.ts";

const env = config({ safe: true });

env.APP_ENV = env.APP_ENV || "development";

/**
 * The name of the Application.
 */
export const name = env.APP_NAME || "App";

/**
 * Your favorite port.
 */
export const port = env.APP_PORT || 3000;

/**
 * Your environment
 */
export const environment = env.APP_ENV;
