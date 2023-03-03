export const WarningMsg = ({ message }: { message: string }) => {
  return (
    <div className="bg-red-100 p-4 text-red-600 rounded-md my-4">{message}</div>
  );
};
