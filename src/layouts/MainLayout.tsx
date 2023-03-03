import { Outlet, useLocation } from "react-router";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { UserBox } from "../components/UserBox";
import { useSession } from "../Context/sessionContext";

export const MainLayout = () => {
  const { pathname } = useLocation();
  const session = useSession();

  const getTitle = () => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/create-peep":
        return "New Peep";
      case "/login":
        return "Log in";
      default:
        return "Tweet";
    }
  };

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex max-w-[1400px] m-auto">
        <div className="flex flex-col justify-between xl:p-4 xl:min-w-[250px]">
          <NavBar />
          {session.userId && <UserBox />}
        </div>
        <main className="flex-1 border-x-2 h-[100vh] overflow-y-scroll">
          <div className="p-6 sticky bg-white bg-opacity-90 top-0 z-20">
            <h1 className="font-bold text-xl">{getTitle()}</h1>
          </div>
          <Outlet />
        </main>
        <SideBar />
      </div>
    </div>
  );
};
