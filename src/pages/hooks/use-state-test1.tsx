import {useEffect, useRef, useState} from 'react';

export default function UseStateTest1() {
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
      <ul>
        {
          list.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </article>
  )
}
