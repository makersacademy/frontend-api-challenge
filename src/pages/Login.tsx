import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { WarningMsg } from "../components/WarningMsg";
import { useGlobalContext } from "../Context/globalContext";
import { useSession, useSessionDispatch } from "../Context/sessionContext";
import { QueryKeyType } from "../hooks/useFetch";

export const Login = () => {
  const { register, handleSubmit, reset } = useForm<QueryKeyType>();
  const { client } = useGlobalContext();
  const dispatch = useSessionDispatch();
  const navigate = useNavigate();
  const session = useSession();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    session.userId && navigate("/");
  }, []);

  const submitHandler: SubmitHandler<QueryKeyType> = async (inputData) => {
    setIsError(false);
    setIsLoading(true);
    try {
      const session = await client.getSession(inputData);
      dispatch({
        type: "login",
        userId: session.user_id,
        sessionKey: session.session_key,
        handle: session.handle,
      });
      navigate("/");
    } catch (e) {
      setIsError(true);
      const error = e as AxiosError;
      setErrorMsg(error.message);
      reset();
    }
    setIsLoading(false);
  };

  return (
    <div className="mx-6">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col p-6 border rounded-md min-h-[350px] justify-center gap-2"
      >
        <label htmlFor="handle">Username</label>
        <input
          type="text"
          id="handle"
          {...register("handle", { required: true })}
          className="form-field"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
          className="form-field"
        />
        {isLoading ? (
          <input
            type="submit"
            value="Log in"
            disabled
            className="blue-btn rounded-lg cursor-pointer mt-4 disabled:cursor-default disabled:bg-slate-200"
          />
        ) : (
          <input
            type="submit"
            value="Log in"
            className="blue-btn rounded-lg cursor-pointer mt-4"
          />
        )}
      </form>
      {isError && <WarningMsg message={errorMsg} />}
    </div>
  );
};
