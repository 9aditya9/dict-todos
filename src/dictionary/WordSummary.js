/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { getWord } from '../selectors/todosSelectors';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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


const WordSummary = ({ word }) => {
    const classes = useStyles();
    if (!word) {
        return null
    }
    const data = word[0];
    // console.log(data.meanings);
    return (
        <div>
            {Object.keys(data).map((key) => (
                <table key={key}>
                    <thead>
                        <tr className={classes.tableItem}>
                            <td>
                                <h4 style={{ fontSize: "25px", color: "wheat" }}>{key}</h4>
                            </td>
                            <td style={{ fontSize: "30px", color: "white" }}>-</td>
                            <td style={{ fontSize: "25px", color: "white" }}>
                                {typeof data[key] === typeof {} ? (
                                    // console.log(data[key])
                                    <Link to="/showdetails" exact="true" style={{ textDecoration: "none", color: "rgba(80, 78, 128, 0.965)" }}>{data[key].length}  -- See Details</Link>
                                ) : (
                                    data[key]
                                )}
                            </td>
                        </tr>
                    </thead>
                </table>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    word: getWord(state),
})

export default connect(mapStateToProps)(WordSummary);