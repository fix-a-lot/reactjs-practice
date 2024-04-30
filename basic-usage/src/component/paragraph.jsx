// paragraph.jsx
import {useContext} from 'react';
import {Foo} from '../pages/test-use-context';

export default function Paragraph() {
  const {count} = useContext(Foo);
  return <p>click count: {count}</p>;
}
