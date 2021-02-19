import React from "react";
import { store } from "../Global/store";
import { Provider } from 'react-redux';
import TaskBox from "../Components/TaskBox/TaskBox";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
    title: "TaskBox",
    component: TaskBox,
} as Meta;

const Template: Story = () => <Provider store={store} ><TaskBox/></Provider>

export const TaskBoxs = Template.bind({});