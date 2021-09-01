import React, { useEffect, useState } from "react";
// import Axios from "axios";
import MediaCard from "./MediaCard";
import Pagination from "./Pagination";

export default function CharList() {
    // const [chars, setChar] = useState([]);

    // useEffect(() => {
    //     Axios
    //         .get("https://rickandmortyapi.com/api/character")
    //         .then(response => {
    //             setChar(response.data.results);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []);

    // return (
    //     <div className="container">
    //         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 bd-highlight">
    //             {chars.map(char => {
    //                 return <MediaCard key={char.id} char={char} />;
    //             })}
    //         </div>

    //     </div>
    // );
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character");
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [pages, setPages] = useState(20);

    useEffect(() => {
        const url = currentPageUrl
        setLoading(true)
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setCharacters(data.results);
            setLoading(false);
            setNextPageUrl(data.info.next);
            setPrevPageUrl(data.info.prev);
            setPages(data.info.pages)
        }
        fetchData();
    }, [currentPageUrl])

    const nextPage = () => {
        setCurrentPageUrl(nextPageUrl);
    }

    const prevPage = () => {
        setCurrentPageUrl(prevPageUrl);
    }

    //doesn't correctly work...

    const goToPage = (num) => {
        setCurrentPageUrl(`https://rickandmortyapi.com/api/character/?page=${num}`);
    }

    if (loading) {
        return "Loading...";
    }

    const charList = characters.map(character => <MediaCard key={Math.floor(Math.random() * 10000)} character={character} />);

    return (
        <div className="App">
            <div className="char-cards">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 bd-highlight">
                        {charList}
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