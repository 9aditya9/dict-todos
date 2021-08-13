/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        overflowX: "auto",
        justifySelf: "center",
        backgroundColor: "#181313",
        color: "white"
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 30,
        borderRadius: 50
        // boxShadow: "20px 20px 60px #f8f8fcdc, -20px -20px 60px #9998a844"
    },
    pos: {
        marginBottom: 12
    },
    table: {
        display: "block",
        // backgroundColor: 'aliceblue',

        alignItems: "center",
        justifySelf: "center",
        justifyContent: "center"
    },
    tableItem: {
        borderRadius: 50
    }
});


export const WordSummary = ({ word }) => {
    const classes = useStyles();
    return (
        <div>
            {Object.keys(word).map((key) => (
                <table key={key}>
                    <thead>
                        <tr className={classes.tableItem}>
                            <td>
                                <h4>{key}</h4>
                            </td>
                            <td style={{ fontSize: "30px" }}>~</td>
                            <td style={{ fontSize: "22px", color: "wheat" }}>
                                {typeof word[key] === typeof {} ? (
                                    //   <WordDetails  />
                                    console.log(word[key])
                                ) : (
                                    word[key]
                                )}
                            </td>
                        </tr>
                    </thead>
                    <tbody>{/* <br /> */}</tbody>
                </table>
            ))}
        </div>
    )
}
