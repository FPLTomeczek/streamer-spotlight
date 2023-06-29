import { Link } from "react-router-dom";
import { ErrorStyled } from "../styles/Error.styled";

const Error = ({ msg }: { msg: string }) => {
  return (
    <ErrorStyled>
      <h1>{msg}</h1>
      <button className="btn-primary">
        <Link to="/">Back To Home</Link>
      </button>
    </ErrorStyled>
  );
};

export default Error;
