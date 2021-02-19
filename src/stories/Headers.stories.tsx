import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Header, { HeaderProps } from '../Components/Header/Header';
import { Provider } from 'react-redux';
import { store } from '../Global/store';

export default {
    title: "Header",
    component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Provider store={store}><Header {...args} /></Provider>;

export const StaticTitle = Template.bind({});
StaticTitle.argTypes = {title: {control: false}};

export const DefaultTitle = Template.bind({});
DefaultTitle.argTypes = {title: {control: false}};
DefaultTitle.args = {
    title: 'TaskBox'
};

export const DynamicTitle = Template.bind({});
DynamicTitle.args ={};
