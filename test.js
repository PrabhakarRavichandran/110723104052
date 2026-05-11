// test.js

import Log from "./log.js";

await Log(
  "backend",
  "error",
  "handler",
  "received string, expected bool"
);

await Log(
  "backend",
  "fatal",
  "db",
  "Critical database connection failure."
);

await Log(
  "backend",
  "info",
  "service",
  "User registration service started"
);

await Log(
  "backend",
  "debug",
  "controller",
  "Incoming signup request payload"
);