/* eslint-disable react/prop-types */
import React, { useState } from 'react'

export const WordDetails = ({ phoneticsObject, meaningsObject, meanings = [
    {
        partOfSpeech: "here",
        definitions: [
            {
                definition: "definition",
                example: "example",
                synonyms: ["a", "b"]
            },
        ]
    }
] }) => {

    // const [phonetics, setPhonetics] = useState({

    // });
    // const [meaning, setMeaning] = useState({
    //     meanings: [
    //         {
    //             partOfSpeech: "here",
    //             definitions: [
    //                 {
    //                     definition: "definition",
    //                     example: "example",
    //                     synonyms: ["a", "b"]
    //                 },
    //             ]
    //         }
    //     ]
    // });

    return (
        <div>
            <div>
                <h1>Phonetics</h1>
                {
                    phoneticsObject.map()
                }
            </div>
        </div>
    )
}
