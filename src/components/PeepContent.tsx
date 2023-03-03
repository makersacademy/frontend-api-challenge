import { ReactComponent as Tick } from "../assets/golden_tick.svg";
import { timeCalculator } from "../utils/timeCalculator";
import { useSession } from "../Context/sessionContext";
import { peepType } from "../../types/apiData";
import { useGlobalContext } from "../Context/globalContext";
import { useState } from "react";
import { AxiosError } from "axios";
import { WarningMsg } from "./WarningMsg";
import { useNavigate } from "react-router-dom";

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

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const deleteHandler = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      await client.deletePeep({
        peepId: id.toString(),
        sessionKey: session.sessionKey!,
      });
      navigate("/");
    } catch (e) {
      setIsError(true);
      const error = e as AxiosError;
      setErrorMsg(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex px-6">
      <div className="flex flex-col border rounded-lg w-full p-6 items-center">
        <div className="relative w-28 xl:w-40 mb-3">
          <img
            src={`https://robohash.org/${user.id}`}
            alt=""
            className="object-cover border rounded-full"
          />
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div className="flex gap-1">
            <h1
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
          <p className=" italic font-semibold text-xl xl:text-2xl text-center">
            "{body}"
          </p>
        </div>
        <hr className="w-full my-4" />
        <div className="flex gap-2 flex-wrap justify-center">
          {likes.length
            ? likes.map(({ user }) => (
                <div key={user.id} className="group relative">
                  <div className="relative w-12 mb-3">
                    <img
                      src={`https://robohash.org/${user.id}`}
                      alt=""
                      className={`object-cover border rounded-full group-hover:bg-[rgba(0,0,0,0.1)] transition-all ${
                        user.id === session.userId &&
                        "border-primary bg-primary bg-opacity-20"
                      }`}
                    />
                  </div>
                  <div className="hidden group-hover:block absolute text-white -bottom-4 bg-[rgba(0,0,0,0.7)] p-1 px-3 rounded-md text-center capitalize transition-all text-sm">
                    {user.id === session.userId ? "You" : user.handle}
                  </div>
                </div>
              ))
            : ""}
        </div>
        <div className="font-bold">
          {likes.length} <span className="ml-1 font-normal">Likes</span>
        </div>
        <hr className="w-full my-4" />
        {!isLoading ? (
          <button
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
        {isError && <WarningMsg message={errorMsg} />}
      </div>
    </div>
  );
};
