import React, {useEffect, useState} from 'react';
import WeirdComponent from './weird-component';

export default function ScratchPad1(): React.JSX.Element {
  const [jQueryVersion, setVersion] = useState('loading...');

  useEffect(() => {
    // interval로 jQuery 로딩 끝났는지 확인하기
    const intervalId = setInterval(() => {
      if (typeof window.jQuery !== 'undefined') {
        setVersion(window.jQuery('body').jquery);
        clearInterval(intervalId);
      }
    }, 500);
  }, []);

  return (
    <section>
      <h2>script loading test #2</h2>
      <p>jQuery version: {jQueryVersion}</p>
      <WeirdComponent />
    </section>
  );
}
