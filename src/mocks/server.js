// src/mocks/server.js
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Setup and export the server instance
export const server = setupServer(...handlers);
