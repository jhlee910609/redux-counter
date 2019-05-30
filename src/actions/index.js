import * as types from "./ActionTypes";

export const increment = (index) => ({
    type: types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type: types.DECREMENT,
    index
});

export const remove = () => ({
    type: types.REMOVE
});

export const create = (color) => ({
    type: types.CREATE,
    color
});
