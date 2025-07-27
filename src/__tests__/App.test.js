import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

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
  global.fetch.mockClear();
});

test("renders App and displays fetched questions", async () => {
  render(<App />);
  const questionPrompt = await screen.findByText(/what is 2 \+ 2\?/i);
  expect(questionPrompt).toBeInTheDocument();
});
