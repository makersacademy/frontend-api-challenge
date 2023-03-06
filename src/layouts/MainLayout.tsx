import { Outlet, useLocation } from "react-router";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { UserBox } from "../components/UserBox";
import { useSession } from "../Context/sessionContext";
import { ReactComponent as BackArrow } from "../assets/backArrow.svg";
import { Link } from "react-router-dom";

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
        return "";
      case "/signup":
        return "";
      default:
        return "Peep";
    }
  };

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex max-w-[1400px] m-auto">
        <div className="flex flex-col justify-between xl:p-4 xl:min-w-[250px]">
          <NavBar />
          {session.userId && <UserBox {...session} />}
        </div>
        <main className="flex-1 border-x-2 h-[100vh] overflow-y-auto">
          <div className="p-6 sticky bg-white bg-opacity-90 top-0 z-20 flex items-center gap-4">
            <Link
              to="/"
              className={`${getTitle() === "Peep" ? "block" : "hidden"}`}
            >
              <BackArrow
                data-cy="back-btn"
                className="w-8 p-1 rounded-full hover:bg-[rgba(0,0,0,0.05)]"
              />
            </Link>
            <h1 className="font-bold text-md xl:text-xl">{getTitle()}</h1>
          </div>
          <Outlet />
        </main>
        <SideBar />
      </div>
    </div>
  );
};
