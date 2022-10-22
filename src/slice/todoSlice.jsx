import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [ 
    { text: "Task 1", important: false, done: false, id: 1 },
    { text: "Task 2", important: false, done: false, id: 2 },
    { text: "Task 3", important: false, done: false, id: 3 }
],
count: 100, 
searchValue: "",
taskFilterId: 'all_tasks',
taskValue: '',
done: 0,
important: 0,
idCount: 20
}

const todoSlice = createSlice({
    name: "todo",
    initialState, 
    reducers: {
        onToggle: (state, action) => {
            const {id, param} = action.payload
            state.todoList.map(todo => {
            if (todo.id === id) {
                todo[param] = !todo[param];
            }
                return todo;
            })
            let num = 0;
            state.todoList.map(todo => (todo[param] && (num += 1)));
            state[param] = num;
        },
        onDelete: (state, action) => {
            state.todoList = state.todoList.filter(todo => (todo.id !== action.payload));
            const statCount = (param) => {
                let num = 0;
                state.todoList.map(todo => (todo[param] && (num += 1)));
                state[param] = num;
            }
            statCount('important');
            statCount('done');
        },
        onChangeVal: (state, action) => {
            state.taskValue = action.payload;
        },
        onTaskAdd : (state) => {
            state.todoList.push({
                text: state.taskValue, 
                important: false, 
                done: false, 
                id: state.idCount
            });
            state.idCount += 1;
        },
        clearForm: (state) => {
            state.taskValue = '';
        },
        changeSearchValue: (state,action) => {
            state.searchValue = action.payload
        },
        onTaskFilter: (state, action) => {
            state.taskFilterId = action.payload;
            console.log(state.taskFilterId);
        }
    }
})

export const { setTodoList, onToggle, onDelete, onChangeVal, onTaskAdd, clearForm, changeSearchValue, onTaskFilter } = todoSlice.actions;
export default todoSlice.reducer;