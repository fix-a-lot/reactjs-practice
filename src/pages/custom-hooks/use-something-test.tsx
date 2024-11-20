import useSomething from '../../components/hooks/use-ready-state';

export default function UseSomethingTest() {
  const {awesome, reset} = useSomething();

  return (
    <section>
      <h2>커스텀 훅 테스트: useSomething</h2>

    </section>
  );
}
