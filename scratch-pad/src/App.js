import React, { useRef/* , useEffect, useState */ } from "react";
import "./App.css";
import { /* UseRefTest,  */UseRefTest2 } from "./Buttons";

function App() {
  const rf = useRef("멋에쓰는물건인고");
  console.log(rf.current);

  return (
    <div className="App">
      <article className="App-article">
        <p>Hello world!</p>
        <span>누르면 입력란으로 포커싱: </span>
        <UseRefTest2 ya="123" ho="234"/>
      </article>
    </div>
  );
}

export default App;
