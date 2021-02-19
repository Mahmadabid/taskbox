import React from "react";
import { store } from "../Global/store";
import { Provider, useSelector } from 'react-redux';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { State, TaskState } from "../Global/Types/SliceTypes";
import Task from "../Components/TaskBox/Task";

export default {
    title: "Task",
    component: Task,
    decorators: [withKnobs]
}

export const TaskWithStaticValues = () => {
    return <Provider store={store} ><Task title="Task0" id="0" date="14:01.26 Sat Oct 17 2020" state={TaskState.normal}/></Provider>
}

export const TaskWithDynamicValues = () => {
    return <Provider store={store} ><Task title={text('title', 'Task1')} id={text('id', '1')} date={text('date', '11:01.26 Thu Feb 11 2021')} state={text('state (TASK_PINNED, TASK_INBOX)', TaskState.normal)}/></Provider>
}

export const PinnedTasks = () => {
    return <Provider store={store} ><Task title="Task0" id="0" date="14:01.26 Sat Oct 17 2020" state={TaskState.pinned}/></Provider>
}

export const TaskWithStoreValues = () => {
 
    const StoreValues = () => {
        const tasks = useSelector((state: State) => state.task.tasks);
    
        return <Task title={tasks[1].title} id={tasks[1].id} date={tasks[1].date} state={tasks[1].state}/>
    }
    
    const storeProvider = () => {
        return <Provider store={store} ><StoreValues /></Provider>
    }

    return storeProvider();
}

export const TaskWithStoreDynamicValues = () => {
 
    const DynamicValues = () => {
        const tasks = useSelector((state: State) => state.task.tasks);
        let index = number('Index (0-4)', 1);
        if (index > 4) {
            index = 4;
        }
        if (index < 0) {
            index = 0;
        }
        let taskValue = tasks[index];
        
        return <Task title={taskValue.title} id={taskValue.id} date={taskValue.date} state={taskValue.state}/>
    }
    
    const storeProvider = () => {
        return <Provider store={store} ><DynamicValues /></Provider>
    }

    return storeProvider();
}
