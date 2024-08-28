/**
 * @file paragraph.tsx
 */

import {useContext} from 'react';
import {Foo} from '../pages/hooks/use-context-test';

export default function Paragraph() {
  const {count} = useContext(Foo);
  return <p>click count: {count}</p>;
}
