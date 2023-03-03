import { useState } from "react";
import { Link } from "react-router-dom";
import { peepType } from "../../types/apiData";
import { ReactComponent as Tick } from "../assets/golden_tick.svg";
import { ReactComponent as Like } from "../assets/like.svg";
import { timeCalculator } from "../utils/timeCalculator";

export const PeepCard = (props: peepType) => {
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
    setIsLike(!isLike);
  };

  return (
    <div className="border-b p-2 xl:p-4 hover:bg-[rgba(0,0,0,0.03)] flex xl:gap-4 gap-2 xl:min-h-[110px] items-center transition-all">
      <div className="relative w-11 xl:w-16 self-start">
        <img
          src={`https://robohash.org/${props.id}`}
          alt=""
          className="object-cover border rounded-full"
        />
      </div>
      <div className="flex flex-col w-full">
        <Link to={`/peep/${props.id}`}>
          <div className="flex-1 flex flex-col gap-1">
            <div className="flex xl:gap-1 xl:items-center flex-col xl:flex-row">
              <div className="flex gap-1">
                <h3 className="text-sm xl:text-lg capitalize font-bold">
                  {props.user.handle}
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
            {props.likes.length != 0 && props.likes.length}
          </p>
        </button>
      </div>
    </div>
  );
};
