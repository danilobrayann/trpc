// ...existing code...
import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

type User = { id: number; name: string; race: string };

const users: User[] = [
  { id: 1, name: "Alice", race: "human" },
  { id: 2, name: "Bob", race: "human" },
];

export const userRouter = t.router({
  getUsers: t.procedure.query(() => {
    return users;
  }),

  addUser: t.procedure
    .input(z.object({ name: z.string(), race: z.string() }))
    .mutation(({ input }) => {
      const nextId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
      const newUser: User = { id: nextId, ...input };
      users.push(newUser);
      return newUser;
    }),
});
// ...existing code...

export type UserRouter = typeof userRouter;
