import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./Components/Main/Main";

import { useData } from "./store";

import Query from "./Components/Query/Query";

const queryClient = new QueryClient();

export default function App() {
  const data = useData((state) => state.data);

  return (
    <QueryClientProvider client={queryClient}>
      <Query />
      {data && <Main />}
    </QueryClientProvider>
  );
}
