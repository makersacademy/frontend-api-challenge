import { userType } from "../../types/apiData";
import { useSession } from "../Context/sessionContext";

type Props = {
  user: userType;
};

export const LikedUserIcon = ({ user }: Props) => {
  const session = useSession();
  return (
    <div key={user.id} className="group relative">
      <div className="relative w-12 mb-3">
        <img
          src={`https://robohash.org/${user.id}`}
          alt=""
          className={`object-cover border rounded-full group-hover:bg-[rgba(0,0,0,0.1)] transition-all ${
            user.id === session.userId &&
            "border-primary bg-primary bg-opacity-20 group-hover:bg-primary group-hover:bg-opacity-40"
          }`}
        />
      </div>
      <div className="hidden group-hover:block absolute text-white -bottom-4 bg-[rgba(0,0,0,0.7)] p-1 px-3 rounded-md text-center capitalize transition-all text-sm">
        {user.id === session.userId ? "You" : user.handle}
      </div>
    </div>
  );
};
