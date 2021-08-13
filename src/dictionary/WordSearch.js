import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import "../components/styles/TodoListItem.css";
import axios from "axios";
import { WordSummary } from "./WordSummary";
// import DictTable from "./DicTable";

const WordSearch = () => {
    const [searched, setSearched] = useState("");
    const [wordData, setWordData] = useState([]);
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
    const [timer, setTimer] = useState("");
    const handleSearched = (event) => {
        // console.log(searched + "and" + event.target.value);
        setSearched(event.target.value);
    };

    const debounce = (func, timeout = 1000) => {
        return () => {
            clearTimeout(timer);
            const t = setTimeout(func, timeout);
            setTimer(t);
        };
    };

    const handleApiCall = async () => {
        const request = axios.get(url + searched);
        await request
            .then((res) => {
                // console.log(res.data);
                setWordData(res.data);
            })
            .catch((error) => {
                alert("O o you typed an incorrect word!" + error.message);
            });
        // data.then(data => setStatus(data.status))
        // console.log(data);
        // return setWordData(data);
    };

    const handleDebounce = debounce(handleApiCall);

    useEffect(() => {
        if (searched !== "") {
            handleDebounce();
        }
    }, [searched]);
    return (
        <>
            <div className="newTodoForm">
                <TextField
                    value={searched}
                    id="outlined-basic"
                    label="Word"
                    variant="outlined"
                    onChange={(event) => handleSearched(event)}
                />
            </div>
            {wordData.length > 0 ? (
                <WordSummary word={wordData[0]} />
                // console.log(wordData)
            ) : // console.log("no data")
                null}
        </>
    );
};

export default WordSearch;
