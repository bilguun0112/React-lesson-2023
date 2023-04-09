export default function Pagination({
  num,
  setNum,
  current,
  setCurrent,
}: any): JSX.Element {
  const pages: { page: number }[] = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];

  function next() {
    setNum(++num);
  }
  function back() {
    num > 1 && setNum(--num);
  }

  return (
    <div>
      <div className="flex rounded-lg font-[Poppins] items-center justify-center">
        <button
          onClick={back}
          className="h-12 border-2 border-r-0 border-indigo-600 px-4 hover:bg-indigo-600 hover:text-white rounded-l-lg"
        >
          back
        </button>
        {pages.map((page: any, i: any) => (
          <button
            key={i}
            onClick={() => setCurrent(page.page)}
            className={`h-12 border-2 border-r-0 border-indigo-600 w-12 ${
              current === page.page && "bg-indigo-600 text-white"
            }`}
          >
            {page.page}
          </button>
        ))}
        <button
          onClick={next}
          className="h-12 border-2 border-indigo-600 px-4 hover:bg-indigo-600 hover:text-white rounded-r-lg"
        >
          next
        </button>
      </div>
    </div>
  );
}
