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

  const URL = "http://localhost:8080/movies/list";
  async function getMovies(): Promise<void> {
    const response = await fetch(URL);
    const data = await response.json();
    setNewmovies(data);
    console.log("mov", newmovies);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="my-5">
      <div className="flex flex-wrap max-w-screen-lg justify-between">
        {newmovies.map((movie, idx) => {
          return (
            <div key={idx}>
              <div className="px-4 ">
                <img
                  src={movie.poster}
                  className="h-96 rounded shadow-2xl w-72 hover:animate-pulse"
                />
                <div className=" w-64 p-1 my-1 text-white font-mono">
                  <div className="flex">
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
      <Pagination num={num} setNum={setNum} />
    </div>
  );
}
