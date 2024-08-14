// button.jsx
import {useContext} from 'react';
import {Foo} from 'pages/hooks/test-use-context';

export default function Button({children}) {
  const {increment} = useContext(Foo);
  return (
    <button type="button" onClick={increment}>
      {children}
    </button>
  );
}
