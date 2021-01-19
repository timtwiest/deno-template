import { environment, name } from "./config/index.ts";
import { log } from "./logger/log.ts";

/**
 * The Server.
 *
 * @async
 * @version 0.0.1
 * @since 0.0.1
 * @author Tim Twiest
 */
const initServer = async () => {
  log.warning(`🧱 Environment: ${environment.toUpperCase()}`);
  log.info(`🦕 Starting ${name}...`);
};

initServer();
