import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="row">
      <main className="col-8">
        <h1>Inicio</h1>
      </main>
      <aside className="col">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Inicio;
