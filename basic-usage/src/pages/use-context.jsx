import { createContext, useContext, useState } from 'react';

const Foo = createContext({});

function Division({ children }) {
  return <div>{children}</div>;
}

function Paragraph({ count }) {
  return <p>click count: {count}</p>;
}

function Button({ children }) {
  const { increment } = useContext(Foo);
  return <button type="button" onClick={increment}>{children}</button>;
}

export default function UseContext() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  return (
    <article>
      <h2>useContext</h2>
      <Foo.Provider value={{ increment }}>
        <Division>
          <Button>click me</Button> {/*이 버튼이나*/}
        </Division>
        <Division>
          <Button>click me too</Button> {/*이 버튼을 누르면*/}
        </Division>
        <Division>
          <Paragraph count={count} /> {/*이 값이 증가함*/}
        </Division>
      </Foo.Provider>
    </article>
  );
};