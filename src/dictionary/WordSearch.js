/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import "../components/styles/TodoListItem.css";
import WordSummary from "./WordSummary";
import { connect } from "react-redux";
import { loadWords } from '../thunks/thunks'

const WordSearch = ({ isLoading, startLoadingWords }) => {
    const [searched, setSearched] = useState("");
    const [timer, setTimer] = useState("");
    const handleSearched = (event) => {
        setSearched(event.target.value);
    };

    const debounce = (func, timeout = 1000) => {
        return () => {
            clearTimeout(timer);
            const t = setTimeout(func, timeout);
            setTimer(t);
        };
    };

    const handleLoadWords = () => {
        startLoadingWords(searched);
    }

    const handleDebounce = debounce(handleLoadWords);

    useEffect(() => {
        if (searched !== "") {
            handleDebounce();
        }
    }, [searched]);

    const loadingMessage = <div style={{ backgroundColor: "white", width: "100%", height: '50vh', textAlign: "center", fontSize: '20px', alignItems: 'center' }}>Loading word data ...</div>


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
            {
                isLoading ? loadingMessage : <WordSummary />
            }
        </>
    );
};

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
    startLoadingWords: (text) => dispatch(loadWords(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WordSearch);