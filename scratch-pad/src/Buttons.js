import { useRef } from "react";

function UseRefTest() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
    console.log(inputEl.current); // <input type="text">
    console.log(inputEl.current === document.querySelector('input')); // true
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export { UseRefTest };
