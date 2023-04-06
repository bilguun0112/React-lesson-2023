import React, { useEffect } from "react";
import test from "./test.json";
import { faDivide } from "@fortawesome/free-solid-svg-icons";
import { SwiperContainer, SwiperSlide, register } from "swiper/element/bundle";
register();
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

export default function UpcomingMovies(): JSX.Element {
  const [newmovies, setNewmovies] = React.useState<IMovies>([]);
  //   const URL = "http://localhost:8080/movies/list";

  //   async function getMovies(): Promise<void> {
  //     const response = await fetch(URL);
  //     const data = await response.json();
  //     setNewmovies(data);
  //   }

  useEffect(() => {
    // getMovies();
    setNewmovies(test);
  }, []);
  console.log(newmovies);
  const slider = newmovies.map((movie, index) => {
    <SwiperContainer spaceBetween={50} slidesPerView={3} key={index}>
      <SwiperSlide>{movie.poster}</SwiperSlide>
    </SwiperContainer>;
  });

  return (
    <div>
      <h1>ZZZ</h1>
      {slider}
    </div>
  );
}
