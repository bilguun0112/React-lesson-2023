import React from "react";

export async function getServerSideProps(req: any) {
  const { date, slug } = req.params;
  return {
    props: {
      date,
      slug,
    },
  };
}

export default function Greeting(props: any): JSX.Element {
  return (
    <div>
      <h1>Hello {props.slug}</h1>
      <h1>Today is {props.date}</h1>
    </div>
  );
}
