"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "../server/client";
import { httpBatchLink } from "@trpc/client";

// Criar clientes fora do componente evita recriação em cada render
const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
