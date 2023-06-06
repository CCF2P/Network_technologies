import React from "react";

export default function About(props) {
  return (
    <section>
      <h2>About me...</h2>
      <h3>Real full stack developer</h3>
      <p>
        I am gorilla, and i am full stack developer!
        And i love bananas...
      </p>
      <a href={props.link}>Look what I found</a>
    </section>
  );
}