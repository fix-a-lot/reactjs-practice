/**
 * @file custom-date-picker.jsx
 *  MUI X Date Picker 컴포넌트.
 * @author fixalot
 * @since 2024-04-29
 */

import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {koKR} from '@mui/x-date-pickers/locales';
import 'dayjs/locale/ko.js';
import {Dayjs} from 'dayjs';

/**
 * @description
 *  사용 방법은 https://mui.com/x/api/date-pickers/date-picker/.
 *  날짜를 선택했을 때 반환되는 값은 dayjs 타입입니다. dayjs에 대한 설명은 https://github.com/iamkun/dayjs.
 * @param props
 * @constructor
 */
export default function CustomDatePicker(props) {
  const handleChange = date => {
    props.onChange(date);
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={'ko'}
      localeText={koKR.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <DatePicker
        {...props}
        value={props.value}
        onChange={handleChange}
        sx={{
          '& .MuiInputLabel-root.Mui-focused': {color: '#979797'}, //styles the label
          '& .MuiOutlinedInput-root': {
            // '& :hover > fieldset': {borderColor: '#000000'},
            '& .Mui-focused fieldset': {borderColor: '#000000'},
            '& .MuiInputBase-inputAdornedEnd': {fontSize: '12px', letterSpacing: '-1px'},
            width: '130px',
            height: '40px',
            borderRadius: '0px'
          }
        }}
      />
    </LocalizationProvider>
  );
}
