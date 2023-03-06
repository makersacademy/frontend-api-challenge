export const LoadingComments = () => {
  return (
    <>
      <div className="bg-gray-100 rounded-xl animate-pulse flex gap-6 items-center p-6">
        <div className="bg-gray-200 w-20 h-20 rounded-full"></div>
        <div className="flex-1">
          <div className="bg-gray-200 w-[80%] h-5 rounded-lg mb-2"></div>
          <div className="bg-gray-200 w-[40%] h-5 rounded-lg"></div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl animate-pulse flex gap-6 items-center p-6">
        <div className="bg-gray-200 w-20 h-20 rounded-full"></div>
        <div className="flex-1">
          <div className="bg-gray-200 w-[80%] h-5 rounded-lg mb-2"></div>
          <div className="bg-gray-200 w-[40%] h-5 rounded-lg"></div>
        </div>
      </div>
    </>
  );
};
