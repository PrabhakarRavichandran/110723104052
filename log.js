// log.js

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJycHJhYmhha2FyNDBAam5uLmVkdS5pbiIsImV4cCI6MTc3ODQ4MTU1NCwiaWF0IjoxNzc4NDgwNjU0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOTZmY2Q4ZDgtMTJjYi00ZDg3LWE1MTMtODQyNTU1OGMyZjQxIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicHJhYmhha2FyIHIiLCJzdWIiOiI1OTlkNjgxYS1lYzhjLTRmZDktOTYxZi03NzU1MDY3OGQ4MzEifSwiZW1haWwiOiJycHJhYmhha2FyNDBAam5uLmVkdS5pbiIsIm5hbWUiOiJwcmFiaGFrYXIgciIsInJvbGxObyI6IjExMDcyMzEwNDA1MiIsImFjY2Vzc0NvZGUiOiJXTk1jcU4iLCJjbGllbnRJRCI6IjU5OWQ2ODFhLWVjOGMtNGZkOS05NjFmLTc3NTUwNjc4ZDgzMSIsImNsaWVudFNlY3JldCI6InVOZVFFRWpVc1d3VFp5bUUifQ.a8KHoW9Tair91qYYMqZwX1QGMwZ-rst0QxBFTrZrUhk";

const VALID_STACKS = ["backend", "frontend"];

const VALID_LEVELS = [
  "debug",
  "info",
  "warn",
  "error",
  "fatal",
];

const VALID_PACKAGES = {
  backend: [
    "cache",
    "controller",
    "cron_job",
    "db",
    "domain",
    "handler",
    "repository",
    "route",
    "service",
    "auth",
    "config",
    "middleware",
    "utils",
  ],

  frontend: [
    "api",
    "component",
    "hook",
    "page",
    "state",
    "style",
    "auth",
    "config",
    "middleware",
    "utils",
  ],
};

async function Log(stack, level, packageName, message) {
  try {
    if (!VALID_STACKS.includes(stack)) {
      throw new Error("Invalid stack");
    }

    if (!VALID_LEVELS.includes(level)) {
      throw new Error("Invalid level");
    }

    if (!VALID_PACKAGES[stack].includes(packageName)) {
      throw new Error("Invalid package");
    }

    const payload = {
      stack,
      level,
      package: packageName,
      message,
    };

    const response = await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    console.log("Log Response:", data);

    return data;
  } catch (error) {
    console.error("Logger Error:", error.message);
  }
}

export default Log;