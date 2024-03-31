import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Example</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>home</Link>
            </li>
            <li>
              <Link to={`/hello1`}>hello 1</Link>
            </li>
            <li>
              <Link to={`/hello2`}>hello 2</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
