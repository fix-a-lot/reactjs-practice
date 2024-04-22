import {forwardRef, useRef} from 'react';
import styles from '../style/container.module.css';

// 자식 컴포넌트
const ChildComponent = forwardRef((props, ref) => {
  return (
    <div>
      <h3>Child Component</h3>
      <input type="text" ref={ref} />
    </div>
  );
});
// ChildComponent.displayName = 'ChildComponent';

// 부모 컴포넌트
export default function ForwardRef() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <div className={styles.childContainer}>
        <ChildComponent ref={inputRef} />
      </div>
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
