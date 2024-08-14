import {useRef} from 'react';

export default function TestUseRefWithDom() {
  const myRef = useRef(null);
  const focusInput = () => myRef.current.focus();

  return (
    <article>
      <h2>useRef를 DOM 객체와 연결하기</h2>
      <input type="text" ref={myRef} />
      &nbsp;
      <button onClick={focusInput}>focus input</button>
    </article>
  );
}
