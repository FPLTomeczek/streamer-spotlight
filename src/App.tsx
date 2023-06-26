import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStreamer from "./pages/AddStreamer";
import StreamerList from "./pages/StreamerList";
import SingleStreamer from "./pages/SingleStreamer";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddStreamer />}></Route>
          <Route path="/streamers" element={<StreamerList />}></Route>
          <Route path="/streamers/:id" element={<SingleStreamer />}></Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
