import { createSlice } from '@reduxjs/toolkit';
import { TaskItem, TaskState } from '../Types/SliceTypes';

const TaskSlice = createSlice({
    name: 'taskList',
    initialState: {
        tasks: [
            { id: "1", title: "Task 1", state: TaskState.normal, date: '11:01.26 Thu Feb 11 2021' },
            { id: "2", title: "Task 2", state: TaskState.normal, date: '08:01.26 Sat Jan 09 2021' },
            { id: "3", title: "Task 3", state: TaskState.normal, date: '05:01.26 Wed Dec 16 2020' },
            { id: "4", title: "Task 4", state: TaskState.normal, date: '14:01.26 Sat Oct 17 2020' },
            { id: "5", title: "Task 5", state: TaskState.pinned, date: '17:01.26 Thu Aug 20 2020' },
        ] as TaskItem[]
    },
    reducers: {
        add: (state, action) => {
            return {
                ...state,
                tasks: [...state.tasks, action.payload.task]
            }
        },
        remove: (state, action) => {
            return {
                ...state,
                tasks: state.tasks.filter((task: { id: string; }) => task.id !== action.payload.id)
            }
        },
        pin: (state, action) => {
            state.tasks.forEach((task: { id: string; state: TaskState; }) => {
                if (task.id === action.payload.id) {
                    if (task.state !== TaskState.pinned) { 
                        task.state = TaskState.pinned
                    }
                    else {
                        task.state = TaskState.normal
                    }
                }
            });
        },
    }
})

export const { add, remove, pin } = TaskSlice.actions;
export default TaskSlice.reducer;