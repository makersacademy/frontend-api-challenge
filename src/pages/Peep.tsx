import { useParams } from "react-router-dom";
import { peepType } from "../../types/apiData";
import { Loader } from "../components/Loader";
import { useGlobalContext } from "../Context/globalContext";
import { useFetch } from "../hooks/useFetch";
import { ReactComponent as Tick } from "../assets/golden_tick.svg";
import { timeCalculator } from "../utils/timeCalculator";
import { useSession } from "../Context/sessionContext";

export const Peep = () => {
  const { id } = useParams();
  const { client } = useGlobalContext();
  const [data, isLoading, isError, error] = useFetch<peepType>({
    querykey: { peepId: id },
    queryFn: client.findPeepById,
  });

  return (
    <>
      {isLoading && <Loader />}
      {isError && <h1>{error}</h1>}
      {!isLoading && data && <PeepContent {...data} />}
    </>
  );
};

const PeepContent = ({ body, user, created_at, likes }: peepType) => {
  const session = useSession();
  const isMyPeep = user.id === session.userId;
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
                      className="object-cover border rounded-full"
                    />
                  </div>
                  <div className="hidden group-hover:block absolute text-white -bottom-4 bg-[rgba(0,0,0,0.7)] p-1 px-3 rounded-md text-center capitalize transition-all text-sm">
                    {user.handle}
                  </div>
                </div>
              ))
            : ""}
        </div>
        <div className="font-bold">
          {likes.length} <span className="ml-1 font-normal">Likes</span>
        </div>
        <hr className="w-full my-4" />
        {isMyPeep && (
          <button className="blue-btn bg-white border-red-500 text-red-500 border w-full mt-6 hover:text-white hover:bg-red-500">
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
