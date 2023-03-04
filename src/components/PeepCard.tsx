import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { peepType } from "../../types/apiData";
import { ReactComponent as Tick } from "../assets/golden_tick.svg";
import { ReactComponent as Like } from "../assets/like.svg";
import { useGlobalContext } from "../Context/globalContext";
import { useSession } from "../Context/sessionContext";
import { timeCalculator } from "../utils/timeCalculator";

export const PeepCard = (props: peepType) => {
  const session = useSession();
  const { client } = useGlobalContext();
  const nagivate = useNavigate();
  const isLikeByUser =
    props.likes.filter(({ user }) => user.id === session.userId).length > 0;
  const [isLike, setIsLike] = useState(isLikeByUser);
  const [isLoading, setIsLoading] = useState(false);
  const [likeNum, setLikeNum] = useState(props.likes.length);

  useEffect(() => {}, [likeNum]);

  const likeHandler = async () => {
    setIsLoading(true);
    // check if the user is logged in
    if (!session.userId || !session.sessionKey) {
      alert("You have to log in to like a peep.");
      nagivate("/login");
    } else {
      try {
        if (isLike) {
          // dislike if isLike == true
          await client.dislikePeep({
            peepId: props.id.toString(),
            userId: session.userId.toString(),
            sessionKey: session.sessionKey,
          });
          setIsLike(!isLike);
          setLikeNum(likeNum - 1);
        } else {
          // like if isLike == false
          await client.likePeep({
            peepId: props.id.toString(),
            userId: session.userId.toString(),
            sessionKey: session.sessionKey,
          });
          setIsLike(!isLike);
          setLikeNum(likeNum + 1);
        }
      } catch (error) {
        console.error(error);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="border-b p-2 xl:p-4 hover:bg-[rgba(0,0,0,0.03)] flex xl:gap-4 gap-2 xl:min-h-[110px] items-center transition-all">
      <div className="relative w-11 xl:w-16 self-start">
        <img
          src={`https://robohash.org/${props.user.id}`}
          alt=""
          className="object-cover border rounded-full"
        />
      </div>
      <div className="flex flex-col w-full">
        <Link to={`/peep/${props.id}`}>
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex xl:gap-1 xl:items-center flex-col xl:flex-row">
              <div className="flex gap-1">
                <h3
                  className={`text-sm xl:text-lg capitalize font-bold ${
                    props.user.id === session.userId && "text-primary"
                  }`}
                >
                  {props.user.id === session.userId ? "You" : props.user.handle}
                </h3>
                <Tick className="w-4 xl:w-5" />
              </div>
              <h4 className="text-secondary font-light text-sm xl:text-base">
                @{props.user.handle} · {timeCalculator(props.created_at)}
              </h4>
            </div>
            <div className="text-sm xl:text-base">{props.body}</div>
          </div>
        </Link>
        {!isLoading ? (
          <button
            onClick={likeHandler}
            className="mt-1 xl:mt-2 text-secondary text-base font-light flex gap-[0.4rem] group items-center transition-all w-fit"
          >
            <Like
              className={`w-4 xl:w-7 ${
                isLike
                  ? "fill-white bg-twred bg-opacity-90"
                  : "fill-secondary group-hover:bg-twred group-hover:bg-opacity-20 group-hover:fill-twred"
              } xl:p-1 rounded-full transition-all`}
            />
            <p
              className={`${
                isLike ? "text-twred font-semibold" : "group-hover:text-twred"
              } text-sm xl:text-base transition-all`}
            >
              {likeNum != 0 && likeNum}
            </p>
          </button>
        ) : (
          <div className="like-loader mt-4 mb-3"></div>
        )}
      </div>
    </div>
  );
};
