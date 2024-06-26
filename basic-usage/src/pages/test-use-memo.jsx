import {useMemo, useState} from 'react';

export default function TestUseMemo() {
  console.log('TestUseMemo 렌더링됨');
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  const cachedValue = useMemo(() => {
    console.log('useMemo 실행됨');
    let complexValue = Number(value1) + Number(value2);
    return complexValue;
  }, [value1, value2]);

  const rerender = () => {
    setValue3(prev => ++prev);
  };

  return (
    <article>
      <h2>useMemo 테스트</h2>
      <div>
        <input value={value1} onChange={e => setValue1(e.target.value)} />
        <input value={value2} onChange={e => setValue2(e.target.value)} />
        <p>{cachedValue}</p>
      </div>
      <button onClick={rerender}>리렌더링</button>
    </article>
  );
}
