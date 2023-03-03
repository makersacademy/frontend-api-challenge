import { SubmitHandler, useForm } from "react-hook-form";
import { WarningMsg } from "../components/WarningMsg";
import { useSession } from "../Context/sessionContext";

type InputData = {
  content: string;
};

export const CreatePeep = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InputData>();
  const session = useSession();

  const submitHandler: SubmitHandler<InputData> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex px-6 gap-4">
      <div>
        <div className="relative w-11 xl:w-16 self-start">
          <img
            src={`https://robohash.org/${session.userId}`}
            alt=""
            className="object-cover border rounded-full"
          />
        </div>
      </div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex-1 flex flex-col"
      >
        <textarea
          placeholder="Share your thought with all Makers :)"
          {...register("content", { required: true })}
          rows={10}
          className="form-field p-4 mb-0"
        />
        {errors.content && <WarningMsg message="This field is required." />}
        <input
          type="submit"
          className="blue-btn rounded-lg cursor-pointer mt-4"
        />
      </form>
    </div>
  );
};
