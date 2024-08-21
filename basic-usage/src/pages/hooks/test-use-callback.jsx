import {useCallback, useEffect, useState} from 'react';

export default function TestUseCallback() {
  const [foo, setFoo] = useState(0);
  const [refresh, setRefresh] = useState(true);

  const callback = useCallback(() => {
    return foo;
  }, [refresh]);

  return (
    <article>
      <h2>useCallback 테스트</h2>
      <p>foo state is <b>{foo}</b></p>
      foo: <input type="text" value={foo} onChange={e => setFoo(e.target.value)} />
      <br />
      <p>And callback returns <b>{callback()}</b></p>
      <button onClick={() => setRefresh(prev => !prev)}>callback refresh toggle</button>
      <hr />
      <h4>설명:</h4>
      <p>
        
      </p>
    </article>
  );
}
