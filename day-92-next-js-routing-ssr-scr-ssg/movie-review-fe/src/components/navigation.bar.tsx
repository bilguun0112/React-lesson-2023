import React from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

export default function NavigationBar(): JSX.Element {
  return (
    <div className={styles.navbar}>
      <Link href="https://www.rottentomatoes.com/">
        <img
          src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
          alt="logo"
          style={{ width: "161px" }}
        />
      </Link>
      <div className={styles.searchbar}>
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-white dark:text-white absolute top-1.5 left-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <input
          className={styles.search}
          type="text"
          placeholder="Search movies, TV, Actors, more ..."
          name="search-input"
        />
      </div>
      <div className={styles.table}>
        <div className={styles.topItem}>
          <Link href="#">What's the Tomatometer?</Link>
          <Link href="#">Critics</Link>
          <Link href="#">LOGIN/SIGNUP</Link>
        </div>
        <ul>
          <li>MOVIES</li>
          <li>TV SHOWS</li>
          <li>MOVIE TRIVIA</li>
          <li>NEWS</li>
          <li>SHOWTIMES</li>
        </ul>
      </div>
    </div>
  );
}
