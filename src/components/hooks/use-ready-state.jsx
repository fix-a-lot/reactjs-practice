import {useState} from 'react';

function useSomething(initialValue = 0) {
  const [awesome, setAwesome] = useState(initialValue);

  const reset = () => setAwesome(initialValue);

  return {awesome, reset};
}

export default useSomething;
