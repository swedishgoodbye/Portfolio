import {
    FINDINGPROJECTS,
    FOUNDPROJECTS
} from "../actions";

const intialState = {
    projects: [],
    findingProject: false,
};

export const Reducer = (state = intialState, action) => {
    switch (action.type) {
        case FINDINGPROJECTS:
            return {
                ...state,
                findingProject: true
            };
        case FOUNDPROJECTS:
            return {
                ...state,
                findingProject: false,
                projects: action.projects
            };
        case Error:
            return { ...state, error: action.errorMessage };
        default:
            return state;
    }
}

export default Reducer;