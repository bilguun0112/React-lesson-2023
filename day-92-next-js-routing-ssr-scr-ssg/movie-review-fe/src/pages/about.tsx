import React from "react";

export async function getStaticProps() {
  return {
    props: {
      theater: "test",
    },
    revalidate: 600, //! time in seconds (10 minuts)
  };
}

export default function About(props: any): JSX.Element {
  return (
    <div>
      <h1>I&rsquo;m an about page</h1>
      <div>Theater name : {props.theater}</div>
    </div>
  );
}
