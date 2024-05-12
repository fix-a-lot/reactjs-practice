// test-use-context.jsx
import {createContext, useState} from 'react';
import Button from 'components/button';
import Paragraph from 'components/paragraph';

export const Foo = createContext({});

export default function TestUseContext() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);
  return (
    <article>
      <h2>useContext 테스트</h2>
      <Foo.Provider value={{count, increment}}>
        <div>
          <Button>이 버튼이나</Button>
        </div>
        <div>
          <Button>이 버튼을 누르면 값이 증가함</Button>
        </div>
        <div>
          <Paragraph />
        </div>
      </Foo.Provider>
      <Button>여긴 안됨</Button>
    </article>
  );
}
