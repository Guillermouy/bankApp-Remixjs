import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function MainNavigation() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const handlerLogOut = () => {
    context.logOut();
    localStorage.setItem("token", "");
    navigate("/login");
  };

  return (
    <nav>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        {context.isLoggedIn && (
          <button onClick={handlerLogOut}>Cerrar Sesion</button>
        )}
      </ul>
    </nav>
  );
}
