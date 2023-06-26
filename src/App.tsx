import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStreamer from "./pages/AddStreamerPage";
import StreamerList from "./pages/StreamerListPage";
import SingleStreamer from "./pages/SingleStreamerPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
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
