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
    <nav className="p-2 flex flex-col gap-6">
      {/* Logo */}
      <Link to="/">
        <div className="flex justify-center items-center xl:justify-start mt-2">
          <TwitterLogo className="fill-primary w-12 xl:w-14 hover:bg-primary hover:bg-opacity-10 p-2 rounded-full transition-all" />
        </div>
      </Link>
      {/* NavBar */}
      <ul className="flex flex-col gap-4">
        {navList.map((nav) => (
          <NavButton key={nav.text} {...nav} />
        ))}
      </ul>
      {/* Create Tweet Button */}
      {session.userId && (
        <Link to="/">
          <div className="blue-btn">
            <span className="hidden xl:block">Tweet</span>
            <span className="text-2xl xl:hidden">+</span>
          </div>
        </Link>
      )}
    </nav>
  );
};
