import {useEffect, useState} from 'react';

export default function TestUseEffect() {
  const [foo, setFoo] = useState(0);

  useEffect(() => {
    console.log('Hello world!');
    return () => console.log('Goodbye world!');
  }, [foo]);

  return (
    <article>
      <h2>useEffect 테스트</h2>
      <p>아무 값이나 설정한 state: {foo}</p>
      &nbsp;
      <button onClick={() => setFoo(prev => ++prev)}>+1</button>
      <hr />
      <h4>설명:</h4>
      <p>useEffect의 정리 코드(cleanup code)는 state가 변경되어 리렌더링되는 시점에도 실행된다.</p>
    </article>
  );
}
