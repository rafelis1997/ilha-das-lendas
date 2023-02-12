"use client";

import { QueryClientProvider, QueryClient } from "react-query";

export default function ReactQueryWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
