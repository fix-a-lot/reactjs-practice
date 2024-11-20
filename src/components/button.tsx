/**
 * @file button.tsx
 */

import React, {ReactNode, useContext} from 'react';
import {Foo} from '../pages/hooks/use-context-test';

export default function Button({children}: {children: ReactNode}): React.JSX.Element {
  const {increment} = useContext(Foo);

  return (
    <button type="button" onClick={increment}>
      {children}
    </button>
  );
}
