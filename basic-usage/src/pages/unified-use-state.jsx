import {useEffect, useState} from 'react';

export default function UnifiedUseState() {
  const [values, setValues] = useState({
    value1: '',
    value2: '',
    value3: ''
  });

  const handleValuesChange = (name, value) => {
    setValues(prev => ({...prev, [name]: value}));
  };

  useEffect(() => {
    console.log('values:', values);
  }, [values]);

  return (
    <article>
      <h2>하나의 객체로 여러 상태를 관리하는 방법</h2>
      <div>
        <span>value1: </span>
        <input values={values} onChange={e => handleValuesChange('value1', e.target.value)} />
        <br />
        <span>value2: </span>
        <input values={values} onChange={e => handleValuesChange('value2', e.target.value)} />
        <br />
        <span>value3: </span>
        <input values={values} onChange={e => handleValuesChange('value3', e.target.value)} />
        <br />
        <ul>
          {Object.keys(values).map(key => (
            <li key={key}>
              {key}: {values[key]}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
