import { FC } from "react";

type Props = {
  userId: number | null;
  sessionKey: string | null;
  handle: string | null;
};

export const UserBox: FC<Props> = ({ userId, handle }) => {
  return (
    <div
      data-cy="user-box"
      className="flex gap-2 px-4 py-2 items-center justify-center rounded-full"
    >
      <div className="relative w-10 xl:w-12">
        <img
          src={`https://robohash.org/${userId}`}
          alt=""
          className="object-cover border rounded-full"
        />
      </div>
      <div className="text-sm hidden xl:block">
        <p className="font-bold capitalize">{handle}</p>
        <p>@{handle}</p>
      </div>
    </div>
  );
};
