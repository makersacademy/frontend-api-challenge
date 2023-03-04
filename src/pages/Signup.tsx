import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { WarningMsg } from "../components/WarningMsg";
import { useGlobalContext } from "../Context/globalContext";
import { useSession } from "../Context/sessionContext";
import { QueryKeyType } from "../hooks/useFetch";
import { useSubmitForm } from "../hooks/useSubmitForm";

export const Signup = () => {
  const { register, handleSubmit, reset } = useForm<QueryKeyType>();
  const { client } = useGlobalContext();
  const navigate = useNavigate();
  const session = useSession();
  const { error, isError, isLoading, callSubmit } = useSubmitForm({
    queryFn: client.createUser,
  });

  useEffect(() => {
    session.userId && navigate("/");
  }, []);

  const submitHandler: SubmitHandler<QueryKeyType> = async ({
    handle,
    password,
  }) => {
    const data = await callSubmit({ handle, password });
    if (data) {
      alert(
        "You have successfully register! Please log in with your credentials."
      );
      navigate("/login");
    } else {
      reset();
    }
  };

  return (
    <div className="mx-6">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col p-4 xl:p-6 py-10 xl:py-14 border rounded-xl justify-center gap-2"
      >
        <div className="flex items-center mb-6 gap-4">
          <img src="/makers_duck.png" className="w-10 xl:w-12" alt="" />
          <h2 data-cy="signup-title" className="font-bold text-xl xl:text-2xl">
            Sign Up to Connect with Makers
          </h2>
        </div>
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
            className="blue-btn rounded-lg cursor-pointer mt-4 disabled:cursor-default disabled:bg-slate-200"
          />
        ) : (
          <input
            type="submit"
            value="Register"
            data-cy="submit-btn"
            className="blue-btn-outline rounded-lg cursor-pointer mt-4"
          />
        )}
        <Link
          to="/login"
          data-cy="back-btn"
          className="blue-btn-outline border-gray-300 text-gray-300 hover:border-red-500 hover:bg-white hover:text-red-500 rounded-lg cursor-pointer mt-2"
        >
          Go back
        </Link>
      </form>
      {isError && <WarningMsg message={error} />}
    </div>
  );
};
