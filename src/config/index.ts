import { config } from "../deps.ts";

const env = config({ safe: true });

// Set the NODE_ENV to 'development' by default
env.APP_ENV = env.APP_ENV || "development";

if (!env) {
  throw new Error("Couldn't find .env file");
}

/**
 * The name of the Application.
 */
export const name = env.APP_NAME || "App";

/**
 * Your favorite port.
 */
export const port = env.APP_PORT || 3000;

/**
 * Your envoriment
 */
export const envoriment = env.APP_ENV;
