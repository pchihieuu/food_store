import * as Types from '../constants/actionTypes'


export const openCompareModal = e => dispatch => {
    dispatch({
        type: Types.OPEN_COMPARE,
    })
}

export const closeCompareModal = e => dispatch => {
    dispatch({
        type: Types.CLOSE_COMPARE,
    })
}

export const addToCompare = product => dispatch => {
    dispatch({
        type: Types.ADD_TO_COMPARE,
        payload: { product }
    })
}


export const deleteFromCompare = productId => dispatch => {
    dispatch({
        type: Types.DELETE_FROM_COMPARE,
        payload: { productId }
    })
}

export const clearCompare = () => dispatch => {
    dispatch({
        type: Types.CLEAR_COMPARE,
    })
}

