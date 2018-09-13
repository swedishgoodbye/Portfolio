import axios from "axios";

export const FINDINGPOSTS = "FINDINGPOSTS";
export const FOUNDPOSTS = "FOUNDPOSTS";
export const CREATINGPOST = "CREATINGPOST";
export const CREATEDPOST = "CREATEDPOST";
export const UPDATINGPOST = "UPDATINGPOST";
export const UPDATEDPOST = "UPDATEDPOST";
export const DELETINGPOST = "DELETINGPOST";
export const DELETEDPOST = "DELETEDPOST";

// const URL = "https://spbend.herokuapp.com/api/";
const URL = "http://localhost:5000/api";

export const getPosts = () => dispatch => {

    dispatch({
        type: FINDINGPOSTS
    });

    axios
        .get(`${URL}/classes`)
        .then(response => {
            console.log("FINDING POSTS", response.data.length);
            const all_posts = response.data;
            dispatch({ type: FOUNDPOSTS, posts: response.data 
            })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Error Fetching Posts!'})
        });
}