import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../main";
import * as cookies from "../../lib/cookies";
import * as JWT from "../../lib/JWT";

const COOKIE__USERNAME = "logged_user";

export default function useAuth() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookies.getCookie(COOKIE__USERNAME)) {
      // Check if auth token is on url
      const searchParams = new URLSearchParams(
        window.location.hash.substring(1)
      );
      const id_token = searchParams.get("id_token");
      if (id_token) {
        const parsedToken = JWT.parseJwt(id_token);
        // Set a cookie with the logged in user
        const userName = parsedToken.name;
        const tokenExpires = searchParams.get("expires_in");
        cookies.setCookie(COOKIE__USERNAME, userName, tokenExpires);
      } else {
        // Redirigir a la pagina de login
        window.location.replace(
          "https://ubicetest.auth.sa-east-1.amazoncognito.com/oauth2/authorize?client_id=6vikplopjt0dl8k3oaioplorrc&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https%3A%2F%2Fmain.d3qdia1eov7s8m.amplifyapp.com%2F"
        );
      }
    }
    return function () {};
  }, []);
}
