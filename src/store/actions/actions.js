// actions file definition

export const ACTION_TYPES = {
    MEM_MODIF: 0,
    LIMIT_CHANGE: 1,
    STEPS_CHANGE: 2,
}

export const updateMemory = (newMem) => {
    return {
        type: ACTION_TYPES.MEM_MODIF,
        payload: newMem,
    }
};

export const updateStepLimit = (limit=1) => {
    return {
        type: ACTION_TYPES.LIMIT_CHANGE,
        payload: limit,
    }
}

export const updateSteps = (steps=[]) => {
    return {
        type: ACTION_TYPES.STEPS_CHANGE,
        payload: steps,
    }
}