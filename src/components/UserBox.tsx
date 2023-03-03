export const UserBox = () => {
  return (
    <div className="flex gap-2 px-4 py-2 items-center justify-center hover:bg-lightblue rounded-full">
      <div className="relative w-10 xl:w-12">
        <img
          src={`https://robohash.org/1240`}
          alt=""
          className="object-cover border rounded-full"
        />
      </div>
      <div className="text-sm hidden xl:block">
        <p className="font-bold">テリー 泰利 (Terry)</p>
        <p>@terryhycheng</p>
      </div>
    </div>
  );
};
