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
        .get(`${URL}/classes`)
        .then(response => {
            console.log("FINDING PROJECTS", response.data.length);
            const all_projects = response.data;
            dispatch({ type: FOUNDPROJECTS, projects: response.data 
            })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Error Fetching Projects!'})
        });
}