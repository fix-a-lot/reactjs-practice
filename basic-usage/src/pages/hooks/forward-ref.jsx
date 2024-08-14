import {forwardRef, useRef} from 'react';
import styles from 'style/container.module.css';

// 자식 컴포넌트
const ChildComponent = forwardRef((props, ref) => {
  return (
    <div>
      <h4>Child Component</h4>
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
      <h2>forwardRef 테스트: useRef를 자식 컴포넌트의 DOM과 연결하기</h2>
      <h3>Parent Component</h3>
      <div className={styles.childContainer}>
        <ChildComponent ref={inputRef} />
      </div>
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
