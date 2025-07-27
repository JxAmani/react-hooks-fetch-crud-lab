// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:4000/questions", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          prompt: "lorem testum 1",
          answers: ["one", "two", "three", "four"],
          correctIndex: 0,
        },
        {
          id: 2,
          prompt: "lorem testum 2",
          answers: ["alpha", "beta", "gamma", "delta"],
          correctIndex: 1,
        },
      ])
    );
  }),

  rest.post("http://localhost:4000/questions", async (req, res, ctx) => {
    const body = await req.json();
    return res(
      ctx.status(201),
      ctx.json({
        id: Math.floor(Math.random() * 1000) + 3,
        ...body,
      })
    );
  }),

  rest.delete("http://localhost:4000/questions/:id", (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.patch("http://localhost:4000/questions/:id", async (req, res, ctx) => {
    const updated = await req.json();
    return res(ctx.status(200), ctx.json(updated));
  }),
];
