import {useRef, useState, useEffect} from 'react';

export default function UseRef() {
  console.log('UseRef render');
  const refTest = useRef(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    refTest.current = 123; // 첫 렌더링에 123 할당
  }, []);

  const onChange = event => setValue(event.target.value);

  console.log(refTest.current); // 첫 렌더링엔 null, 이후 사용자 입력이 발생하면 123 출력됨

  return (
    <article>
      <h2>useRef</h2>
      <input
        type="text"
        autoFocus
        value={value}
        onChange={onChange}
        placeholder="아무거나 입력하세요"
      />
    </article>
  );
}
