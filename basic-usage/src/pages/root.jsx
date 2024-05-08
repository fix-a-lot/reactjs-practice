import {Link, Outlet} from 'react-router-dom';

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
              <Link to={`/use-effect`}>useEffect</Link>
            </li>
            <li>
              <Link to={`/use-ref`}>useRef</Link>
            </li>
            <li>
              <Link to={`/use-ref-with-dom`}>useRef with DOM</Link>
            </li>
            <li>
              <Link to={`/test-use-context`}>useContext</Link>
            </li>
            <li>
              <Link to={`/etc/coins`}>coins</Link>
            </li>
            <li>
              <Link to={`/props`}>props</Link>
            </li>
            <li>
              <Link to={`/props-with-rendering`}>props의 변화가 렌더링에 미치는 영향</Link>
            </li>
            <li>
              <Link to={`/forward-ref`}>forward-ref</Link>
            </li>
            <li>
              <Link to={`/input-checkbox`}>input-checkbox</Link>
            </li>
            <li>
              <Link to={`/custom-hook`}>custom-hook</Link>
            </li>
            <li>
              <Link to={`/test-use-memo`}>useMemo</Link>
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
