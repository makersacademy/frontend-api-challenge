import { Route, Routes } from "react-router-dom";
import { Error } from "./pages/Error";
import Home from "./pages/Home";
import { Peep } from "./pages/Peep";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/peep/:id" element={<Peep />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
