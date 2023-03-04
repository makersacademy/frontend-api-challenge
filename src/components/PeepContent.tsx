import { ReactComponent as Tick } from "../assets/golden_tick.svg";
import { timeCalculator } from "../utils/timeCalculator";
import { useSession } from "../Context/sessionContext";
import { peepType } from "../../types/apiData";
import { useGlobalContext } from "../Context/globalContext";
import { WarningMsg } from "./WarningMsg";
import { useNavigate } from "react-router-dom";
import { useSubmitForm } from "../hooks/useSubmitForm";
import { LikedUserIcon } from "./LikedUserIcon";

export const PeepContent = ({
  id,
  body,
  user,
  created_at,
  likes,
}: peepType) => {
  const session = useSession();
  const { client } = useGlobalContext();
  const isMyPeep = user.id === session.userId;
  const navigate = useNavigate();
  const { isLoading, isError, error, callSubmit } = useSubmitForm({
    queryFn: client.deletePeep,
  });

  const deleteHandler = async () => {
    await callSubmit({
      peepId: id.toString(),
      sessionKey: session.sessionKey!,
    });
    navigate("/");
  };

  return (
    <div className="flex px-6">
      <div className="flex flex-col border rounded-lg w-full p-6 items-center">
        <div className="relative w-28 xl:w-40 mb-3">
          <img
            data-cy="main-user-icon"
            src={`https://robohash.org/${user.id}`}
            alt=""
            className="object-cover border rounded-full"
          />
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div className="flex gap-1">
            <h1
              data-cy="username"
              className={`font-bold text-xl xl:text-2xl capitalize ${
                isMyPeep && "text-primary"
              }`}
            >
              {isMyPeep ? "You" : user.handle}
            </h1>
            <Tick className="w-6 xl:w-8" />
          </div>
          <p className="text-md xl:text-lg">{timeCalculator(created_at)}</p>
        </div>
        <p className="my-2 text-secondary font-light text-sm text-center xl:text-base">
          {new Date(created_at).toUTCString()}
        </p>
        <div className="my-4">
          <p
            data-cy="body"
            className="font-semibold text-xl xl:text-2xl text-center"
          >
            "{body}"
          </p>
        </div>
        <hr className="w-full my-4" />
        <div className="flex gap-2 flex-wrap justify-center">
          {likes.length &&
            likes.map(({ user }) => (
              <LikedUserIcon
                key={user.id}
                user={user}
                userId={session.userId}
              />
            ))}
        </div>
        <div data-cy="like-counts" className="font-bold">
          {likes.length} <span className="ml-1 font-normal">Likes</span>
        </div>
        <hr className="w-full my-4" />
        {!isLoading ? (
          <button
            data-cy="delete-btn"
            onClick={deleteHandler}
            className={`blue-btn bg-white border-red-500 text-red-500 border w-full mt-6 hover:text-white hover:bg-red-500 ${
              !isMyPeep && "hidden"
            }`}
          >
            Delete
          </button>
        ) : (
          <button
            disabled
            className={`blue-btn bg-white border-gray-300 text-gray-300 hover:bg-inherit border w-full mt-6 ${
              !isMyPeep && "hidden"
            }`}
          >
            Delete
          </button>
        )}
        {isError && <WarningMsg message={error} />}
      </div>
    </div>
  );
};
