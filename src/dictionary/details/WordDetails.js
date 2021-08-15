/* eslint-disable react/prop-types */
import React from 'react';
import { getWordMeanings, getWordPhonetics } from '../../selectors/todosSelectors';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
const WordDetails = ({ wordMeanings, wordPhonetics }) => {
    // console.log(wordMeanings);
    return (
        <div style={{}}>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <Button
                    color="primary"
                    style={{ backgroundColor: "white", marginLeft: "10px" }}
                >
                    Back
                </Button>
            </Link>
            <div style={{ textAlign: 'center', color: 'white' }}>
                <Button
                    color="primary"
                    style={{ backgroundColor: "white", marginLeft: "10px" }}
                >
                    Meanings
                </Button>
            </div>
            <ShowMeanings meanings={wordMeanings} />
            <div style={{ textAlign: 'center', color: 'white' }}>
                <h1>Phonetics</h1>
            </div>
            <ShowPhonetics phonetics={wordPhonetics} />
        </div>
    )
}

const ShowPhonetics = ({ phonetics }) => {
    // console.log(phonetics)
    return (
        <div style={{ padding: '0' }}>
            {
                Object.keys(phonetics).map((value, key) => (
                    <ul key={key} style={{ border: '1px solid white', backgroundColor: 'black' }}>
                        {Array.isArray(phonetics) ? null : (
                            <li style={{ backgroundColor: 'black', color: 'purple', fontWeight: 'bold' }}>{value.toLocaleUpperCase()}</li>
                        )}
                        <li>
                            {typeof phonetics[value] === typeof {} ? (
                                <ShowMeanings meanings={phonetics[value]} />
                            ) : (
                                <li style={{ color: 'white', backgroundColor: 'black' }}>{phonetics[value]}</li>
                            )}
                        </li>
                    </ul>
                ))
            }
        </div>
    )
}

// eslint-disable-next-line no-unused-vars
const ShowMeanings = ({ meanings }) => {
    return (
        <div style={{ padding: '0' }}>
            {
                Object.keys(meanings).map((value, key) => (
                    <ul key={key} style={{ backgroundColor: 'whitesmoke', border: '1px solid black' }}>
                        {Array.isArray(meanings) ? null : (
                            <li style={{ backgroundColor: 'white', color: 'purple', fontWeight: 'bold' }}>{value.toLocaleUpperCase()}</li>
                        )}
                        <li>
                            {typeof meanings[value] === typeof {} ? (
                                <ShowMeanings meanings={meanings[value]} />
                            ) : (
                                <li style={{ color: 'black' }}>{meanings[value]}</li>
                            )}
                        </li>
                    </ul>
                ))
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    wordMeanings: getWordMeanings(state),
    wordPhonetics: getWordPhonetics(state),
})

export default connect(mapStateToProps, null)(WordDetails);