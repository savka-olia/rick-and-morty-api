import React, { useEffect, useState } from "react";
import EpCard from "./EpCard";
import Pagination from "./Pagination";

export default function EpList() {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/episode");
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [pages, setPages] = useState(20);

    useEffect(() => {
        const url = currentPageUrl
        setLoading(true)
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setEpisodes(data.results);
            setLoading(false);
            setNextPageUrl(data.info.next);
            setPrevPageUrl(data.info.prev);
            setPages(data.info.pages);
        }
        fetchData();
    }, [currentPageUrl])

    const nextPage = () => {
        setCurrentPageUrl(nextPageUrl)
    }

    const prevPage = () => {
        setCurrentPageUrl(prevPageUrl)
    }

    const goToPage = (num) => {
        setCurrentPageUrl(`https://rickandmortyapi.com/api/episode?page=${num}`)
    }
    if (loading) {
        return "Loading..."
    }

    const EpList = episodes.map(episode => {
        return <EpCard key={episode.id} episode={episode} />;
    });
    
    return (
        <div className="App">
            <div className="char-cards">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 bd-highlight">
                        {EpList}
                    </div>
                </div>

            </div>
            <Pagination
                nextPage={nextPageUrl ? nextPage : null}
                prevPage={prevPageUrl ? prevPage : null}
                goToPage={goToPage}
                pages={pages}
            />
        </div>
    );
}