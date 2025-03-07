import React, {useEffect, useState} from 'react';
import useAwesomeHook from './use-awesome-hook';

export default function ScratchPad2(): React.JSX.Element {
  const {loadingStatus} = useAwesomeHook();

  const [jQueryVersion, setVersion] = useState('loading...');

  useEffect(() => {
    // interval로 확인하는 일을 훅으로 분리하기
    if (loadingStatus === 'ready') {
      setVersion(window.jQuery('body').jquery);
    }
  }, [loadingStatus]);

  return (
    <section>
      <h2>script loading test #3</h2>
      <p>jQuery version: {jQueryVersion}</p>
    </section>
  );
}
