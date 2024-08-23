import {useParams, useSearchParams} from 'react-router-dom';
import {useState} from 'react';

export default function ReactRouterHooks() {
  const {lastPath} = useParams();

  const [searchParams] = useSearchParams();

  return (
    <section>
      <p>bar: {searchParams.get('bar')}</p>
      <p>lastPath: {lastPath}</p>
    </section>
  )
}
