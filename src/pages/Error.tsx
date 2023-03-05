export const Error = ({ message }: { message: string }) => {
  return (
    <div className="border mx-6 rounded-lg min-h-[400px] flex flex-col justify-center items-center">
      <h1 className="font-bold tracking-wide text-3xl">404 Not Found</h1>
      <p className="font-light tracking-wide mt-2">{message}</p>
    </div>
  );
};
