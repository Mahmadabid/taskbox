import React from "react";
import { store } from "../Global/store";
import { Provider } from 'react-redux';
import AddTask from "../Components/TaskBox/AddTask";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
    title: "AddTask",
    component: AddTask,
} as Meta;

const Template: Story = () => <Provider store={store}><AddTask/></Provider>

export const Add = Template.bind({});
