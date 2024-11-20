import React, {useEffect, useState} from 'react';

export default function UseStateTest1(): React.JSX.Element {
  const [list, setList] = useState<number[]>([]);

  useEffect(() => {
    let i = 0;
    while (i < 10) {
      setList(prev => [...prev, i]);
      i++;
    }
  }, []);

  return (
    <article>
      <h2>useState Test #1</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
