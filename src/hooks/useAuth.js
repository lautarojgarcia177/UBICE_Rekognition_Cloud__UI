import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../main";

export default function useAuth() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate(appRoutes.login);
    }
  }, []);
}
