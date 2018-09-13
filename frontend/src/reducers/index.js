import {
    FINDINGPOSTS,
    FOUNDPOSTS
} from "../actions";

const intialState = {
    projects: []
};

export const Reducer = (state = intialState, action) => {
    switch (action.type) {
        case FINDINGPOSTS:
            return {
                ...state,
                findingPost: true
            };
        case FOUNDPOSTS:
            return {
                ...state,
                findingPost: false,
                posts: action.posts
            }
    }
}

export default Reducer;