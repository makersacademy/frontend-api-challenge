import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionDispatch } from "../Context/sessionContext";

export const Logout = () => {
  const dispatch = useSessionDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "logout",
    });
    navigate("/");
  }, []);

  return <></>;
};
