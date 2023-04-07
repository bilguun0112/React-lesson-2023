import React from "react";
import { useState, useEffect } from "react";
import styles from "@/styles/movie.module.css";

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

export default function MovieList() {
  const URL = "http://localhost:8080/movies/list";

  const [list, setList] = useState<IMovies[]>([]);

  async function getMovies() {
    const response = await fetch(URL);
    const data = await response.json();
    setList(data);
    console.log("list", list);
  }

  useEffect(() => {
    getMovies();
  }, []);

  const movieList = list.map((movie, idx) => {
    return (
      <div key={idx}>
        <img
          src={movie?.poster}
          alt={movie.title}
          height={231.727}
          width={161.664}
        />
        <h4>{movie.title.slice(0, 18)}</h4>
        <h5>{movie.lastupdated.slice(0, 10)}</h5>
      </div>
    );
  });

  return <div className={styles.main}>{movieList}</div>;
}
