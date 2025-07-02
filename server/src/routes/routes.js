import testing from "../controllers/testing.js";
import { readFile } from 'fs/promises';

const schema = JSON.parse(await readFile(new URL('../../config/schema.json', import.meta.url), 'utf-8'));
console.log("Schema loaded:", schema);

const routes = async (fastify, options) => {
    fastify.get(schema['testing'].schema.url, schema['testing'].schema,testing);
}

export default routes;