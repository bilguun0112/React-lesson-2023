export default function FancyButton(props: any) {
  return (
    <div>
      <button className="button"> {props.children}</button>
      <style jsx>{`
      .button {
          background-color: red
          color: brown;
          border: 1px solid black;
          `}</style>
    </div>
  );
}
