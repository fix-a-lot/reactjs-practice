import {useRef} from 'react';

export default function UseRefWithDom() {
  const myRef = useRef(null);
  const focusInput = () => myRef.current.focus();

  return (
    <article>
      <h2>useRef with DOM</h2>
      <input type="text" ref={myRef} />
      &nbsp;
      <button onClick={focusInput}>focus input</button>
    </article>
  );
}
