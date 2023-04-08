export default function Pagination({ num, setNum }: any): JSX.Element {
  const pages: any = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
    { page: num + 4 },
  ];

  return (
    <div>
      <h1>Pagination</h1>

      <div className="flex bg-white rounded-lg font-[Poppins]">
        {pages.map((page: any, i: any) => {
          <button
            key={i}
            className="h-12 border-2 border-r-0 border-indigo-600 w-12"
          >
            {page.page}
          </button>;
        })}
      </div>
    </div>
  );
}
