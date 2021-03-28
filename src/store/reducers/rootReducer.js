import { combineReducers } from "redux";
import memoryReducer, { stepsLimitReducer, stepsReducer } from "./spaceReducer";

const rootReducer = combineReducers({
    memory: memoryReducer,
    stepsLimit: stepsLimitReducer,
    steps: stepsReducer,
});

export default rootReducer;