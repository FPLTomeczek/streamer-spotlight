import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddStreamerPage, SingleStreamerPage, ErrorPage } from "./pages";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddStreamerPage />}></Route>
          <Route path="/streamers/:id" element={<SingleStreamerPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
