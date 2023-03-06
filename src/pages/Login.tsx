import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { sessionType } from "../../types/apiData";
import { WarningMsg } from "../components/WarningMsg";
import { useGlobalContext } from "../Context/globalContext";
import { useSession, useSessionDispatch } from "../Context/sessionContext";
import { QueryKeyType } from "../hooks/useFetch";
import { useSubmitForm } from "../hooks/useSubmitForm";

export const Login = () => {
  const { register, handleSubmit, reset } = useForm<QueryKeyType>();
  const { client } = useGlobalContext();
  const dispatch = useSessionDispatch();
  const navigate = useNavigate();
  const session = useSession();
  const { error, isError, isLoading, callSubmit } = useSubmitForm<sessionType>({
    queryFn: client.getSession,
  });

  useEffect(() => {
    session.userId && navigate("/");
  }, []);

  const submitHandler: SubmitHandler<QueryKeyType> = async (inputData) => {
    const data = await callSubmit(inputData);
    if (data) {
      dispatch({
        type: "login",
        userId: data.user_id,
        sessionKey: data.session_key,
        handle: data.handle,
      });
      navigate("/");
    } else {
      reset();
    }
  };

  return (
    <div className="mx-6">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col p-6 py-10 border rounded-xl justify-center gap-2"
      >
        <h2 data-cy="login-title" className="font-bold text-2xl mb-6">
          Welcome to Chitter
        </h2>
        <label htmlFor="handle">Username</label>
        <input
          type="text"
          id="handle"
          data-cy="handle"
          {...register("handle", { required: true })}
          className="form-field"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          data-cy="password"
          {...register("password", { required: true })}
          className="form-field"
        />
        {isLoading ? (
          <input
            type="submit"
            value="Log in"
            disabled
            data-cy="disabled-btn"
            className="blue-btn rounded-lg cursor-pointer mt-4 disabled:cursor-default disabled:bg-slate-200"
          />
        ) : (
          <input
            type="submit"
            value="Log in"
            data-cy="submit-btn"
            className="blue-btn rounded-lg cursor-pointer mt-4"
          />
        )}
        <p className="text-center my-4 text-secondary text-sm font-light">
          You don't have an account? Sign up{" "}
          <Link
            data-cy="sign-up-link"
            to="/signup"
            className="text-primary underline"
          >
            here
          </Link>
        </p>
      </form>
      {isError && <WarningMsg message={error} />}
    </div>
  );
};
