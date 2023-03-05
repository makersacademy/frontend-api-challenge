import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { CreatePeep } from "./pages/CreatePeep";
import { Error } from "./pages/Error";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Peep } from "./pages/Peep";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/create-peep" element={<CreatePeep />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/peep/:id" element={<Peep />} />
        <Route
          path="/error"
          element={<Error message={"Please check if the URL is correct."} />}
        />
        <Route
          path="/*"
          element={<Error message={"Please check if the URL is correct."} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
