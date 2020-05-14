import { log } from "./logger/log.ts";
import { name, envoriment } from "./config/index.ts";

/**
 * The Server.
 *
 * @async
 * @version 0.0.1
 * @since 0.0.1
 * @author Tim Twiest
 */
const initServer = async () => {
  log.warning(`🧱 Environment: ${envoriment.toUpperCase()}`);
  log.info(`🦕 Starting ${name}...`);
};

initServer();
