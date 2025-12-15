"use client";

import { trpc } from "@/server/client";

export default function Home() {
  const getUser = trpc.user.getUsers.useQuery();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2>hello world</h2>
      {JSON.stringify(getUser.data)}
    </div>
  );
}
