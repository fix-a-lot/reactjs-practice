import {useParams, useSearchParams} from 'react-router-dom';
import React from 'react';

export default function ReactRouterHooks(): React.JSX.Element {
  const {lastPath} = useParams();
  const [searchParams] = useSearchParams();

  return (
    <section>
      <p>bar: {searchParams.get('bar')}</p>
      <p>lastPath: {lastPath}</p>
    </section>
  );
}
