export default function Button(props: any): JSX.Element {
  return (
    <div>
      <button
        className="button"
        onClick={() => {
          console.log("clicked");
        }}
      >
        {props.children}
      </button>
      <style jsx>
        {`
          .button {
            font-size: 20px;
            padding: 10px 20px;
            border-radius: 5px;
            background-color: green;
            color: white;
          }
        `}
      </style>
    </div>
  );
}
