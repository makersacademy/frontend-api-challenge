import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Error } from "./pages/Error";
import Home from "./pages/Home";
import { Peep } from "./pages/Peep";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/peep/:id" element={<Peep />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
