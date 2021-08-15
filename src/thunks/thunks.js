import {
    loadWordInProgress,
    loadWordSuccess,
    loadWordFailure,
} from '../actions/todosActions';

import axios from 'axios';

// eslint-disable-next-line no-unused-vars
export const loadWords = (text) => async (dispatch, getState) => {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
    try {
        dispatch(loadWordInProgress());
        const response = await axios.get(url + text);
        const words = await response.data;

        dispatch(loadWordSuccess(words));
    } catch (error) {
        dispatch(loadWordFailure());
        dispatch(displayAlert(error));
    }
}

export const displayAlert = text => () => {
    alert(`Error : ${text}`);
}