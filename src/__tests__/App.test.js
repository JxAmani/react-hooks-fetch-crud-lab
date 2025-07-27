import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

// Mock fetch before each test
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            prompt: "What is 2 + 2?",
            answers: ["3", "4", "5", "6"],
            correctIndex: 1,
          },
        ]),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

test("renders App and displays fetched questions", async () => {
  render(<App />);
  fireEvent.click(screen.getByText(/view questions/i)); // simulate clicking the button

  const questionPrompt = await screen.findByText(/what is 2 \+ 2\?/i);
  expect(questionPrompt).not.toBeNull(); // ✅ safe built-in matcher
});
