import {Link, Outlet, useLocation, useResolvedPath} from 'react-router-dom';

export default function Root() {
  const {pathname} = useResolvedPath({});
  console.debug('resolvedPath.pathname:', pathname);

  return (
    <>
      <header>
        <h1>React Practice With TypeScript</h1>
      </header>
      <main id="detail">
        <nav>
          <p>React Basic Usages</p>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/etc/coins'}>Coins</Link>
            </li>
            <li>
              <Link to={'/hooks/custom-hooks'}>Custom Hooks</Link>
            </li>
            <li>
              <Link to={'/hooks/forward-ref'}>forward-ref</Link>
            </li>
            <li>
              <Link to={'/tags/input-checkbox'}>input-checkbox</Link>
            </li>
            <li>
              <Link to={'/props/props-with-rendering'}>props와 렌더링</Link>
            </li>
            <li>
              <Link to={'/props/props'}>props</Link>
            </li>
            <li>
              <Link to={'/etc/scratch-pad'}>scratch-pad</Link>
            </li>
            <li>
              <Link to={`/hooks/use-callback`}>useCallback</Link>
            </li>
            <li>
              <Link to={'/hooks/use-context'}>useContext</Link>
            </li>
            <li>
              <Link to={'/hooks/use-effect'}>useEffect</Link>
            </li>
            <li>
              <Link to={'/hooks/use-memo'}>useMemo</Link>
            </li>
            <li>
              <Link to={'/hooks/use-reducer-1'}>useReducer #1</Link>
            </li>
            <li>
              <Link to={'/hooks/use-reducer-2'}>useReducer #2</Link>
            </li>
            <li>
              <Link to={'/hooks/use-ref-with-dom'}>useRef with DOM</Link>
            </li>
            <li>
              <Link to={'/hooks/use-ref'}>useRef</Link>
            </li>
            <li>
              <Link to={'/hooks/unified-use-state'}>Unified useState</Link>
            </li>
          </ul>
          <p>React Router</p>
          <ul>
            <li><Link to={'/third-party/react-router/react-router-hooks/foo?bar=123'}>React Router's hooks</Link></li>
          </ul>
          <p>dayjs</p>
          <ul>
            <li>
              <Link to={'/third-party/dayjs/dayjs'}>dayjs</Link>
            </li>
          </ul>
          <p>MUI X</p>
          <ul>
            <li>
              <Link to={'/third-party/mui-x/date-picker'}>DatePicker</Link>
            </li>
          </ul>
          <p>React Hook Form</p>
          <ul>
            <li><Link to={'/third-party/react-hook-form/validation'}>Validation</Link></li>
          </ul>
        </nav>
        <article>{pathname === '/' ? <p>좌측의 링크를 누르thㅔ요</p> : <Outlet />}</article>
      </main>
    </>
  );
}
