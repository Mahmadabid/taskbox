import React from "react";
import { TaskState } from "../Global/Types/SliceTypes";
import Task, { TaskProps } from "../Components/TaskBox/Task";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Provider } from "react-redux";
import { store } from "../Global/store";

export default {
    title: "Task",
    component: Task,
} as Meta;

const Template: Story<TaskProps> = (args) => <Provider store={store} ><Task {...args} /></Provider>;

export const Default = Template.bind({});
Default.argTypes = {id: {control: false}, title: {control: false}, state: {control: false}, date: {control: false}};
Default.args = {
    id: "1",
    title: "TEST TASK",
    state: TaskState.normal,
    date: "14:01.26 Sat Oct 17 2020"
};

export const Pinned = Template.bind({});
Pinned.argTypes = {id: {control: false}, title: {control: false}, state: {control: false}, date: {control: false}};
Pinned.args = {
    id: "1",
    title: "TEST TASK",
    state: TaskState.pinned,
    date: "14:01.26 Sat Oct 17 2020"
};

export const Dynamic = Template.bind({});
Dynamic.args = {
    id: "1",
    title: "TEST TASK",
    state: TaskState.pinned,
    date: "14:01.26 Sat Oct 17 2020"
};
