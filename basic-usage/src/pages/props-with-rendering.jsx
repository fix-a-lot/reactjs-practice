import {useEffect, useRef, useState} from 'react';

function Child({value1, value2, value3: inheritedValue3, value4}) {
  console.log('Child rendered');

  useEffect(() => {
    console.log('value1 inside of child:', value1);
  }, [value1]);

  useEffect(() => {
    console.log('value2 inside of child:', value2);
  }, [value2]);

  useEffect(() => {
    console.log('value3 inside of child:', inheritedValue3);
  }, [inheritedValue3]);

  useEffect(() => {
    console.log('value4 inside of child:', value4);
  }, [value4]);

  const [value3] = useState(inheritedValue3);

  return (
    <div>
      <h3>Child</h3>
      <p>value1: {value1}</p>
      <p>value2: {value2}</p>
      <p>value3: {value3}</p>
      <p>value4: {value4}</p>
    </div>
  );
}

export default function Props() {
  console.log('Parent rendered');

  let value1 = 'value1-init';
  const changeValue1 = () => {
    value1 = 'value1-changed';
    console.log('changeValue1 called');
  };

  const value2 = useRef('value2-init');
  const changeValue2 = () => {
    value2.current = 'value2-changed';
    console.log('changeValue2 called');
  };

  let value3 = 'value3-init';
  const changeValue3 = () => {
    value3 = 'value3-changed';
    console.log('changeValue3 called');
  };

  const [value4, setValue4] = useState('value4-init');
  const changeValue4 = () => {
    setValue4('value4-changed');
    console.log('changeValue4 called');
  };

  return (
    <article>
      <h2>props의 변화가 렌더링에 미치는 영향</h2>
      <button onClick={changeValue1}>단순 변수 버전</button>
      <br />
      <button onClick={changeValue2}>useRef 버전</button>
      <br />
      <button onClick={changeValue3}>단순 변수 + Child에서 state 등록</button>
      <br />
      <button onClick={changeValue4}>단순 변수 + 부모 컴포넌트에서 state 등록</button>
      <p>
        위 버튼 둘 다 props로 상속시킨 값을 재할당하는 버튼이며, useEffect로 확인해보면 props가
        변화함
      </p>
      <Child value1={value1} value2={value2.current} value3={value3} value4={value4} />
      <p>
        하지만 Child에서 value1, value2, value3을 부모 컴포넌트에서 state로 등록하지 않았기 때문에
        props가 변한 걸 인지하지 못함
      </p>
    </article>
  );
}
