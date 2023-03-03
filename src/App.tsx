import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Error } from "./pages/Error";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Peep } from "./pages/Peep";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/peep/:id" element={<Peep />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
