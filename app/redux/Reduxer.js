// Methods for immutable operations
/**
 * Merge two arrays/dictionaries without mutating any of the source array/dictionary
 * Helps remove all the spread operators from our reducer file as Redux Sauce
 *
 * @param {*} acc array/dictionary
 * @param {*} value array/dictionary
 * @returns New array/dictionary
 */
export const immutableMerge = (acc, value) =>
    Array.isArray(acc) ? [...acc, ...value] : { ...acc, ...value };

/**
 * Create Reducer with Dictionary of functions instead of switch statement
 *
 * @param {*} [initialState={}] Initial state for the reducer
 * @param {*} handlers Dictionary that maps each action type to their respective operation
 * @returns Reducer
 */
const Reduxer = (initialState = {}, handlers) => {
    if (!handlers) {
        return state => state;
    }

    return (state = initialState, action) => {
        if (!action?.type || !handlers[action.type]) {
            return state;
        }

        return handlers[action.type](state, action);
    };
};

export default Reduxer;