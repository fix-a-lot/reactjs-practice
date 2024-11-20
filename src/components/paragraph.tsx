/**
 * @file paragraph.tsx
 */

import React, {useContext} from 'react';
import {Foo} from '../pages/hooks/use-context-test';

export default function Paragraph(): React.JSX.Element {
  const {count} = useContext(Foo);
  return <p>click count: {count}</p>;
}
