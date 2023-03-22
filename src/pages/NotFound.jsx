import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>404 - NotFound</h1>
      <Link to="/">Volver</Link>
    </>
  );
}

export default NotFound;
