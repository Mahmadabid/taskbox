import React from "react";
import { store } from "../Global/store";
import { Provider } from 'react-redux';
import TaskBox from "../Components/TaskBox/TaskBox";

export default {
    title: "TaskBox",
    component: TaskBox,
}

export const TaskBoxWithStoreTitle = () => {
    return <Provider store={store} ><TaskBox/></Provider>
}