import { Link } from "react-router-dom";
import { ErrorPageStyled } from "../styles/Error.styled";

const ErrorPage = () => {
  return (
    <ErrorPageStyled>
      <h1>Ooops... You have entered wrong page!</h1>
      <button className="btn-primary">
        <Link to="/">Home</Link>
      </button>
    </ErrorPageStyled>
  );
};

export default ErrorPage;
