import { userType } from "../../types/apiData";
import { useSession } from "../Context/sessionContext";

type Props = {
  user: userType;
  userId: number | null;
};

export const LikedUserIcon = ({ user, userId }: Props) => {
  return (
    <div data-cy="icon-container" key={user.id} className="group relative">
      <div className="relative w-12 mb-3">
        <img
          data-cy="icon-image"
          src={`https://robohash.org/${user.id}`}
          alt=""
          className={`object-cover border rounded-full group-hover:bg-[rgba(0,0,0,0.1)] transition-all ${
            user.id === userId &&
            "border-primary bg-primary bg-opacity-20 group-hover:bg-primary group-hover:bg-opacity-40"
          }`}
        />
      </div>
      <div
        data-cy="icon-username"
        className="hidden group-hover:block absolute text-white -bottom-4 bg-[rgba(0,0,0,0.7)] p-1 px-3 rounded-md text-center capitalize transition-all text-sm"
      >
        {user.id === userId ? "You" : user.handle}
      </div>
    </div>
  );
};
