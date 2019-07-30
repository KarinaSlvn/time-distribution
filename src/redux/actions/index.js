import {cbId} from '../../utils/uniq-id';

export const addSticker = () => dispatch => {
    dispatch({
        type: 'ADD_STICKER',
        id: cbId(),
        text
    })
}

export const removeSticker = () => dispatch => {
    dispatch({
        type: 'REMOVE_STICKER',
        id
    })
}