import React, { useRef, useState } from "react";
import './App.css';
import { UseRefTest } from './Buttons';

function App() {
  const rf = useRef("멋에쓰는물건인고");
  console.log(rf.current);

  return (
    <div className="App">
      <article className="App-article">
        <p>Hello world!</p>
        <span>누르면 입력란으로 포커싱: </span>
        <UseRefTest/>
      </article>
    </div>
  );
}

export default App;
