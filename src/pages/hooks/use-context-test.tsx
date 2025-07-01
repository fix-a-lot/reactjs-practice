/**
 * @file use-context.tsx
 */
import React from 'react';
import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';
import FooProvider from '../../components/FooProvider';

export default function UseContextTest(): React.JSX.Element {
  return (
    <section>
      <h2>useContext 테스트</h2>
      <FooProvider>
        <div>
          <Button>이 버튼이나</Button>
        </div>
        <div>
          <Button>이 버튼을 누르면 값이 증가함</Button>
        </div>
        <div>
          <Paragraph />
        </div>
      </FooProvider>
      <Button>여긴 안됨</Button>
    </section>
  );
}
