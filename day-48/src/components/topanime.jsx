import { useEffect, useState } from "react";

export default function TopAnime() {
    const [animes, setAnimes] = useState([])
    const [page, setPage] = useState(1)


    useEffect(() => {
        callData();
    }, [page])
    const URL = `https://api.jikan.moe/v4/top/anime?page=${page}`;

    async function callData() {
        const jSONdata = await fetch(URL);
        const RESULTdata = await jSONdata.json();
        setAnimes(RESULTdata.data)
        console.log(RESULTdata);
    }




    return (
        <div>
            <h1> Day - 48 Top Anime </h1>

            {animes && animes.map((anime, idx) => {
                return (
                    <h6 key={idx}>{anime.title}</h6>
                )
            })}
            <button onClick={() => {
                setPage(page + 1)
            }}>next page</button>
        </div>
    )
}