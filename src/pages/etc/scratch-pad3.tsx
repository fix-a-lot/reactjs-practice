import {useEffect, useRef, useState} from 'react';

export default function ScratchPad3() {
  const [list, setList] = useState([]);

  return (
    <article>
      <h2>Scratch Pad #3</h2>
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
