import { ReactComponent as TwitterLogo } from "../assets/twitter.svg";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as LogInIcon } from "../assets/login.svg";
import { ReactComponent as LogOutIcon } from "../assets/logout.svg";
import { NavButton } from "./NavButton";
import { Link } from "react-router-dom";
import { useSession } from "../Context/sessionContext";

export const NavBar = () => {
  const session = useSession();
  const navList = [
    {
      Icon: HomeIcon,
      text: "Home",
      url: "/",
    },
    {
      Icon: LogInIcon,
      text: "Log In",
      url: "/login",
    },
    {
      Icon: LogOutIcon,
      text: "Log Out",
      url: "/logout",
    },
  ];

  return (
    <nav className="xl:p-2 flex flex-col gap-6">
      {/* Logo */}
      <Link to="/">
        <div className="flex justify-center items-center xl:justify-start">
          <TwitterLogo className="fill-primary w-12 xl:w-14 hover:bg-primary hover:bg-opacity-10 p-2 rounded-full transition-all" />
        </div>
      </Link>
      {/* NavBar */}
      <ul className="flex flex-col gap-4">
        <NavButton {...navList[0]} />
        {session.userId ? (
          <NavButton {...navList[2]} />
        ) : (
          <NavButton {...navList[1]} />
        )}
      </ul>
      {/* Create Tweet Button */}
      {session.userId && (
        <Link to="/create-peep">
          <div className="blue-btn mx-2 xl:mx-0">
            <span className="hidden xl:block">Tweet</span>
            <span className="text-2xl xl:hidden">+</span>
          </div>
        </Link>
      )}
    </nav>
  );
};
