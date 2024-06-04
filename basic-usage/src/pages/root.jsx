import {Link, Outlet, useLocation, useResolvedPath} from 'react-router-dom';

export default function Root() {
  const {pathname} = useResolvedPath();
  console.debug('resolvedPath.pathname:', pathname);

  return (
    <>
      <header>
        <h1>React Basic Usages</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/etc/coins`}>Coins</Link>
            </li>
            <li>
              <Link to={`/custom-hooks`}>Custom Hooks</Link>
            </li>
            <li>
              <Link to={`/forward-ref`}>forward-ref</Link>
            </li>
            <li>
              <Link to={`/input-checkbox`}>input-checkbox</Link>
            </li>
            <li>
              <Link to={`/props-with-rendering`}>props와 렌더링</Link>
            </li>
            <li>
              <Link to={`/props`}>props</Link>
            </li>
            <li>
              <Link to={`/test-use-context`}>useContext</Link>
            </li>
            <li>
              <Link to={`/use-effect`}>useEffect</Link>
            </li>
            <li>
              <Link to={`/test-use-memo`}>useMemo</Link>
            </li>
            <li>
              <Link to={`/test-use-reducer-1`}>useReducer #1</Link>
            </li>
            <li>
              <Link to={`/test-use-reducer-2`}>useReducer #2</Link>
            </li>
            <li>
              <Link to={`/use-ref-with-dom`}>useRef with DOM</Link>
            </li>
            <li>
              <Link to={`/test-use-ref`}>useRef</Link>
            </li>
            <li>
              <Link to={'/unified-use-state'}>Unified useState</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <main id="detail">{pathname === '/' ? <p>상단의 링크를 누르thㅔ요</p> : <Outlet />}</main>
    </>
  );
}
