// button.jsx
import { useContext } from 'react';
import { Foo } from '../pages/use-context';

export default function Button({ children }) {
  const { increment } = useContext(Foo);
  return (
    <button type='button' onClick={increment}>
      {' '}
      {/*context로 전달 받은 함수*/}
      {children}
    </button>
  );
}
