/**
 * @file button.tsx
 */

import {ReactNode, useContext} from 'react';
import {Foo} from '../pages/hooks/use-context';

export default function Button({children}: {children: ReactNode}) {
  const {increment} = useContext(Foo);

  return (
    <button type="button" onClick={increment}>
      {children}
    </button>
  );
}
