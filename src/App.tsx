import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AddStreamerPage,
  StreamerListPage,
  SingleStreamerPage,
  ErrorPage,
} from "./pages";
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
          <Route path="/" element={<AddStreamerPage />}></Route>
          <Route path="/streamers" element={<StreamerListPage />}></Route>
          <Route path="/streamers/:id" element={<SingleStreamerPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
