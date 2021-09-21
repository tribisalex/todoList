const ADD_TASK = 'ADD-TASK';
const UPDATE_NEW_TASK_TEXT = 'UPDATE-NEW-TASK-TEXT';

let initialState = {
    tasks: [
        {id: 1, message: 'My first task'},
        {id: 2, message: 'Показать созданный ToDo ментору'},
        ],
    newTaskText: '',
    profile: null,
    status: ''
};

const listReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK: {
            let newTask = {
                id: 3,
                message: state.newTaskText
            };
            return {
                ...state,
                tasks: [...state.tasks, newTask],
                newTaskText: ''
            };
        }

        case UPDATE_NEW_TASK_TEXT: {
            return {
                ...state,
                newTaskText: action.newText
            };
        }


        default:
            return state;
    }
}

export const addTaskActionCreator = () => ({type: ADD_TASK})
export const updateNewTaskTextActionCreator = (text) => ({type: UPDATE_NEW_TASK_TEXT, newText: text})


export default listReducer;