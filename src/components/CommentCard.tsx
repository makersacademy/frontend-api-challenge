import { CommentData } from "../../types/apiData";
import { ReactComponent as Tick } from "../assets/golden_tick.svg";

type Props = {
  data: CommentData;
};

export const CommentCard = ({ data }: Props) => {
  return (
    <div
      key={data.id}
      className="border flex gap-4 items-center rounded-xl p-4"
    >
      <div className="relative w-14 xl:w-20">
        <img
          data-cy="main-user-icon"
          src={`https://robohash.org/${data.id}`}
          alt=""
          className="object-cover border rounded-full"
        />
      </div>
      <div>
        <div className="flex xl:gap-1 xl:items-center flex-col xl:flex-row">
          <div className="flex gap-1">
            <h3 className={`text-sm xl:text-lg capitalize font-bold `}>
              {data.username}
            </h3>
            <Tick className="w-4 xl:w-5" />
          </div>
          <h4 className="text-secondary font-light text-sm xl:text-base">
            @{data.username}
          </h4>
        </div>
        <p>{data.content}</p>
      </div>
    </div>
  );
};
