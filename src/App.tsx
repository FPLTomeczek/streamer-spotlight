import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStreamer from "./pages/AddStreamer";
import StreamerList from "./pages/StreamerList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddStreamer />}></Route>
        <Route path="/streamers" element={<StreamerList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
