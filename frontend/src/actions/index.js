import axios from "axios";

export const FINDINGPROJECTS = "FINDINGPROJECTS";
export const FOUNDPROJECTS = "FOUNDPROJECTS";
export const CREATINGPROJECT = "CREATINGPROJECT";
export const CREATEDPROJECT = "CREATEDPROJECT";
export const UPDATINGPROJECT = "UPDATINGPROJECT";
export const UPDATEDPROJECT = "UPDATEDPROJECT";
export const DELETINGPROJECT = "DELETINGPROJECT";
export const DELETEDPROJECT = "DELETEDPROJECT";
export const ERROR = "ERROR";

// const URL = "https://spbend.herokuapp.com/api/";
const URL = "http://localhost:5000/api";

export const getProjects = () => dispatch => {

    dispatch({
        type: FINDINGPROJECTS
    });

    axios
        .get(`${URL}/fp`)
        .then(response => {
            console.log("FINDING PROJECTS", response.data.length);
            dispatch({ type: FOUNDPROJECTS, projects: response.data 
            })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Error Fetching Projects!'})
        });
}

export const deleteProject = project_id => dispatch => {
    dispatch({
        type: DELETEDPROJECT
    });
    axios.delete(`${URL}/deleteproject/${project_id}`).then(response => {
        dispatch({
            type: DELETEDPROJECT
        });
    });
};