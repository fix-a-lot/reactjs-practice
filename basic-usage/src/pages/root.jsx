import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>
        <h1>React Basic Usages</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>home</Link>
            </li>
            <li>
              <Link to={`/use-ref`}>useRef</Link>
            </li>
            <li>
              <Link to={`/use-ref-with-dom`}>useRef with DOM</Link>
            </li>
            <li>
              <Link to={`/use-context`}>useContext</Link>
            </li>
            <li>
              <Link to={`/coins`}>coins</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <main id="detail">
        <Outlet />
      </main>
    </>
  );
}
