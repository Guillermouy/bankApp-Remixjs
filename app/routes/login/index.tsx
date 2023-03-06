import { useContext, useState } from "react";
import AuthContext from "~/context/AuthContext";
import { GetSessions } from "~/services/SessionService";
import { useNavigate } from "react-router-dom";

const MIN_LENGTH = 4;

export default function LoginComponent() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailIsValid = email.length > MIN_LENGTH && email.includes("@");
  const passwordIsValid = password.length > MIN_LENGTH;

  const ChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const ChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const LoginHandler = async (event: any) => {
    event.preventDefault();
    if (!emailIsValid || !passwordIsValid) return;
    try {
      const result = await GetSessions(email, password);
      context.logIn();
      localStorage.setItem("token", result?.data.token);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
      } else {
        setError("Email or Password invalid");
      }
    }
  };

  return (
    <>
      <form>
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={ChangeEmail}
            value={email}
          ></input>
        </div>
        <br />
        <div>
          <input
            type="text"
            placeholder="Password"
            onChange={ChangePassword}
            value={password}
          ></input>
        </div>
        <br />
        <p>{error}</p>
        <br />
        <button
          onClick={LoginHandler}
          disabled={!emailIsValid || !passwordIsValid}
        >
          Inicia Sesion
        </button>
      </form>
    </>
  );
}
