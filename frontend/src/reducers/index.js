import {
    FINDINGPROJECTS,
    FOUNDPROJECTS
} from "../actions";

const intialState = {
    projects: []
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
            }
    }
}

export default Reducer;