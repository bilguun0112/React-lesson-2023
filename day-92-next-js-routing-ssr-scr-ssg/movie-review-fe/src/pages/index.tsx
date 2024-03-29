import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import NavigationBar from "@/components/navigation.bar";
import UpcomingMovies from "@/components/movieList";

export async function getServerSideProps() {
  const theaterRequest = await fetch("http://localhost:8080/theater/list");
  const theaterData = await theaterRequest.json();
  console.log(theaterData);

  return {
    props: {
      theater: theaterData,
    },
  };
}

export default function Home(props: any): JSX.Element {
  const side = typeof window ? "client" : "server";
  const today = new Date().toLocaleDateString();
  return (
    <div className="bg-background-primary">
      <div className="flex flex-col justify-between items-center min-h-screen bg-background-secondary">
        <NavigationBar />
        <UpcomingMovies />
      </div>
      {/* Welcome! */}
      {/* <div>You're currently on the {side}-side</div>
      <Link href="/about">About Page</Link>
      <Link href="/contact">Contact Page</Link>
      <Link href="/greeting/John?age=25">Greeting Page</Link>
      <Link
        href={{
          pathname: "/posts/[date]/[slug]",
          query: { date: today, slug: "first-post" },
        }}
      >
        Post Page
      </Link> */}
      {/* <Link href="/posts/2023-04-05/first-post">Post Page</Link> */}
    </div>
  );
}
