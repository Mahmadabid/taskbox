import React from "react";
import { store } from "../Global/store";
import { Provider } from 'react-redux';
import AddTask from "../Components/TaskBox/AddTask";

export default {
    title: "AddTask",
    component: AddTask,
}

export const TaskWithStoreTitle = () => {
    return <Provider store={store} ><AddTask/></Provider>
}