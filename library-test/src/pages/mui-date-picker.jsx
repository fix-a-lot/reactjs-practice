import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {koKR} from '@mui/x-date-pickers/locales';
import 'dayjs/locale/ko.js';
import dayjs, {Dayjs} from 'dayjs';
import {useEffect, useState} from 'react';
import CustomDatePicker from 'components/custom-date-picker';

export default function TestMuiDatePicker() {
  const [r1, setR1] = useState(null);
  const [r2, setR2] = useState(null);
  const [r3, setR3] = useState(null);
  const [r4, setR4] = useState(null);

  const handleClickButton1 = () => {
    setR1(dayjs('2021-10-10'));
  };
  const handleClickButton2 = () => {
    setR2(dayjs());
  };
  const handleClickButton3 = () => {
    setR3(dayjs());
  };
  const handleClickButton4 = () => {
    setR4(dayjs());
  };

  useEffect(() => {
    window.dj = dayjs();
  }, []);

  return (
    <>
      <div>
        <button onClick={handleClickButton1}>버튼1</button>
        결과1: <CustomDatePicker value={r1} onChange={setR1} />
        <br />
        <button onClick={handleClickButton2}>버튼2</button>
        결과2: <CustomDatePicker value={r2} onChange={setR2} />
        <br />
        <button onClick={handleClickButton3}>버튼3</button>
        결과3: <CustomDatePicker value={r3} onChange={setR3} />
        <br />
        <button onClick={handleClickButton4}>버튼4</button>
        결과4: <CustomDatePicker value={r4} onChange={setR4} />
        <br />
      </div>
    </>
  );
}
