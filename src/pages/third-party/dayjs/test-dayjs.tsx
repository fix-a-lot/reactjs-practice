/**
 * @file dayjs.tsx
 */

import {useState} from 'react';
import dayjs from 'dayjs';

export default function TestDayjs() {
  const [r1, setR1] = useState('');
  const [r2, setR2] = useState('');
  const [r3, setR3] = useState('');
  const [r4, setR4] = useState('');

  const handleClickButton1 = () => {
    setR1(dayjs().format('YYYY-MM-DD'));
  };

  return (
    <div>
      <button onClick={handleClickButton1}>버튼1</button>
      <p>결과1: {r1}</p>
      <p>결과2: {r2}</p>
      <p>결과3: {r3}</p>
      <p>결과4: {r4}</p>
    </div>
  );
}
