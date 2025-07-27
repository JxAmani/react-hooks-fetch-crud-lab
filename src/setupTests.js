// src/setupTests.js
import { server } from "./mocks/server";
import "@testing-library/jest-dom";

// Start MSW before tests
beforeAll(() => server.listen());

// Reset after each test
afterEach(() => server.resetHandlers());

// Clean up after all tests
afterAll(() => server.close());

// Export for clarity (optional but helpful if you want to import in custom environments)
export {};
