import { ACTION_TYPES } from "../actions/actions";

const memoryReducer = (state={}, action) => {
    switch (action.type) {
        case ACTION_TYPES.MEM_MODIF:
            return [...action.payload];
        default:
            return state;
    }
};

export const stepsLimitReducer = (state=2, action) => {
    switch (action.type) {
        case ACTION_TYPES.LIMIT_CHANGE:
            return action.payload;
        default:
            break;
    }
    return state;
};

export const stepsReducer = (state=[], action) => {
    switch (action.type) {
        case ACTION_TYPES.STEPS_CHANGE:
            return action.payload;
        default:
            break;
    }
    return state;
};

export default memoryReducer;