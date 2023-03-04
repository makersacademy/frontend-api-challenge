import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { WarningMsg } from "../components/WarningMsg";
import { useGlobalContext } from "../Context/globalContext";
import { useSession } from "../Context/sessionContext";
import { QueryKeyType } from "../hooks/useFetch";
import { useSubmitForm } from "../hooks/useSubmitForm";

export const CreatePeep = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<QueryKeyType>();
  const { client } = useGlobalContext();
  const session = useSession();
  const navigate = useNavigate();
  const { error, isError, isLoading, callSubmit } = useSubmitForm({
    queryFn: client.createPeep,
  });

  useEffect(() => {
    !session.userId && navigate("/");
  }, []);

  const submitHandler: SubmitHandler<QueryKeyType> = async ({ content }) => {
    const data = await callSubmit({
      userId: session.userId!.toString(),
      sessionKey: session.sessionKey!,
      content,
    });
    data ? navigate("/") : reset();
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
        {isLoading ? (
          <input
            type="submit"
            value="Submit"
            disabled
            className="blue-btn rounded-lg cursor-pointer mt-4 disabled:cursor-default disabled:bg-slate-200"
          />
        ) : (
          <input
            type="submit"
            value="Share"
            className="blue-btn rounded-lg cursor-pointer mt-4"
          />
        )}
        {isError && <WarningMsg message={error} />}
      </form>
    </div>
  );
};
