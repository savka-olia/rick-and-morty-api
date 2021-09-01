import React, { useEffect, useState } from "react";
import LocCard from "./LocCard";
import Pagination from "./Pagination";

export default function EpList() {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/location");
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [pages, setPages] = useState(20);

    useEffect(() => {
        const url = currentPageUrl
        setLoading(true)
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setLocations(data.results);
            setLoading(false);
            setNextPageUrl(data.info.next);
            setPrevPageUrl(data.info.prev);
            setPages(data.info.pages);
        }
        fetchData();
    }, [currentPageUrl]);

    const nextPage = () => {
        setCurrentPageUrl(nextPageUrl);
    }

    const prevPage = () => {
        setCurrentPageUrl(prevPageUrl);
    }

    const goToPage = (num) => {
        setCurrentPageUrl(`https://rickandmortyapi.com/api/location?page=${num}`);
    }

    if (loading) {
        return "Loading...";
    }


    const locList = locations.map(loc => {
                        return <LocCard key={loc.id} loc={loc} />;
                    });

    return (
        <div className="App">
            <div className="char-cards">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 bd-highlight">
                        {locList}
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