import {Link, Outlet} from 'react-router-dom';

export default function Root() {
  return (
    <>
      <header>
        <h1>React Library Tests</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>home</Link>
            </li>
            <li>
              <Link to={`/dayjs`}>Day.js</Link>
            </li>
            <li>
              <Link to={`/mui-date-picker`}>MUI Date Picker</Link>
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
