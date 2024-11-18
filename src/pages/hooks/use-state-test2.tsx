import {useEffect, useRef, useState} from 'react';

let charArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

export default function UseStateTest2() {
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    while (i < 10) {
      console.log('while: i:', i);
      setList(prev => {
        console.log('inside modifier: i:', i);
        return [...prev, charArr[i]]
      });
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
