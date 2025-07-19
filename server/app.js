import "dotenv/config.js";
import Fastify from "fastify";
const fastify = Fastify({ logger: true });
import connectToMongo from "./connector/mongoConnect.js";
import routes from "./src/routes/routes.js";
import config from "config";

fastify.register(routes);

await connectToMongo();

const port = config.get("port") || process.env.PORT;
const startFunc = async () => {
  try {
    await fastify.listen({ port: port });
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startFunc();
