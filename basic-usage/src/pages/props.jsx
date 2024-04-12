import { useRef } from 'react';

function Child({ value }) {
  console.log('Child rendered');
  return (
    <div>
      <h3>Child</h3>
      <p>{value}</p>
    </div>
  );
}

export default function Props() {
  console.log('Parent rendered');
  let value = 123;
  const changeValue = () => {
    console.log('change value');
    value = 345;
    console.log('value:', value);
  };

  return (
    <article>
      <h2>props</h2>
      <button onClick={changeValue}>이 버튼을 눌러도 props로 상속된 변하지 않음</button>
      <Child value={value} />
    </article>
  );
}
