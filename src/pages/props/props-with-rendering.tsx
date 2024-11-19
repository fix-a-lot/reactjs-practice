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
    <section>
      <h3>Child</h3>
      <p>value1: {value1}</p>
      <p>value2: {value2}</p>
      <p>value3: {value3}</p>
      <p>value4: {value4}</p>
    </section>
  );
}

export default function PropsWithRendering() {
  console.log('Parent rendered');

  let value1 = 0;
  const changeValue1 = () => {
    value1 = ++value1;
    console.log('changeValue1 called');
  };

  const value2 = useRef(0);
  const changeValue2 = () => {
    value2.current = ++value2.current;
    console.log('changeValue2 called');
  };

  let value3 = 0;
  const changeValue3 = () => {
    value3 = ++value3;
    console.log('changeValue3 called');
  };

  const [value4, setValue4] = useState(0);
  const changeValue4 = () => {
    setValue4(prev => ++prev);
    console.log('changeValue4 called');
  };

  return (
    <article>
      <h2>props의 변경이 렌더링에 미치는 영향</h2>
      <button onClick={changeValue1}>단순 변수 버전</button>
      <br />
      <button onClick={changeValue2}>useRef 버전</button>
      <br />
      <button onClick={changeValue3}>단순 변수 + Child에서 state 등록</button>
      <br />
      <button onClick={changeValue4}>단순 변수 + 부모 컴포넌트에서 state 등록</button>
      <Child value1={value1} value2={value2.current} value3={value3} value4={value4} />
      <hr />
      <p>
        위의 버튼들은 props로 상속시킨 값 0을 1씩 증가시키는 버튼이다. Child에서는 useEffect로 이를
        확인하고 있다.
      </p>
      <p>
        하지만 value4를 제외한 나머지는 부모 컴포넌트에서 state로 등록하지 않았기 때문에, 값의
        변경이 렌더링을 유발하지 않으며, Child에서 props의 변경을 인지할 수 없다.
      </p>
      <p>
        그나마 value2는 useRef로 저장해서 렌더링을 발생시키진 않지만, value4가 재랜더링을 유발하면
        그 때 값의 증가를 확인할 수 있긴 함.
      </p>
      <p>
        그러니까 결론은, Child에서 상속받은 props의 변경을 인지하려면, 부모 컴포넌트에서 해당 값을
        state로 등록하고 상태를 업데이트해야 한다는 것이다.
      </p>
    </article>
  );
}
