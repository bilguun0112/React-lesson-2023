import React, { useEffect, useState } from "react";
import Pagination from "./pagination";
interface IAwards {
  wins: number;
  nominations: number;
  text: string;
}

interface IImdb {
  rating: number;
  votes: number;
  id: number;
}

interface ITomatoes {
  viewer: IViewer;
  lastUpdated: Date;
}

interface IViewer {
  rating: number;
  numReviews: number;
  meter: number;
}

interface IMovies {
  _id: any;
  plot: string;
  genres: [string];
  runtime: number;
  rated: string;
  cast: [string];
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  languages: [string];
  released: Date;
  directors: [string];
  writers: [string];
  awards: IAwards;
  lastupdated: string;
  year: number;
  imdb: IImdb;
  countries: [string];
  tomatoes: ITomatoes;
}

export default function UpcomingMovies(): JSX.Element {
  const [newmovies, setNewmovies] = useState<IMovies[]>([]);

  const [num, setNum] = useState(1);
  const [current, setCurrent] = useState(1);

  const URL = `http://localhost:8080/movies/list?page=${current}`;
  async function getMovies(): Promise<void> {
    const response = await fetch(URL);
    const data = await response.json();
    setNewmovies(data);
    console.log("mov", newmovies);
  }

  useEffect(() => {
    getMovies();
  }, [current]);
  const noImage =
    "https://www.shutterstock.com/image-photo/businessman-holding-paper-say-no-260nw-105617738.jpg";
  return (
    <div className="my-5">
      <div className="flex flex-wrap max-w-screen-lg justify-evenly md:justify-center sm:justify-center">
        {newmovies.map((movie, idx) => {
          return (
            <div key={idx}>
              <div className="group px-4 md:w-full m:">
                <img
                  src={movie.poster ? movie.poster : noImage}
                  className="h-96 rounded shadow-2xl w-72 group-hover:fill-gray-600 group-hover:opacity-50 hover:fill"
                />
                <div className=" w-64 p-1 my-1 text-black font-mono group-hover:text-blue-400">
                  <div className="flex items-center">
                    <img
                      src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/certified_fresh-notext.56a89734a59.svg"
                      className="w-8 mr-2"
                    />
                    <a>{movie.imdb.rating}</a>
                  </div>
                  <h3 className="">{movie.title}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        num={num}
        setNum={setNum}
        current={current}
        setCurrent={setCurrent}
      />
    </div>
  );
}
