// use-context.jsx
import {createContext, useContext, useState} from 'react';
import Division from '../component/division';
import Button from '../component/button';
import Paragraph from '../component/paragraph';

export const Foo = createContext({});

export default function TestUseContext() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);
  return (
    <article>
      <h2>useContext</h2>
      <Foo.Provider value={{count, increment}}>
        <Division>
          <Button>click me</Button> {/*이 버튼이나*/}
        </Division>
        <Division>
          <Button>click me too</Button> {/*이 버튼을 누르면*/}
        </Division>
        <Division>
          <Paragraph /> {/*이 값이 증가함*/}
        </Division>
      </Foo.Provider>
    </article>
  );
}
