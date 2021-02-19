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

export const StaticValues = Template.bind({});
StaticValues.argTypes = {title: {control: false}, BarColor: {control: false}, BarBackground: {control: false}, bodyColor: {control: false}, bodyBackground: {control: false} };

export const DefaultValues = Template.bind({});
DefaultValues.argTypes = {title: {control: false}, BarColor: {control: false}, BarBackground: {control: false}, bodyColor: {control: false}, bodyBackground: {control: false} };
DefaultValues.args = {
    title: 'TaskBox',
    BarColor: 'white',
    BarBackground: 'red',
    bodyColor: 'white',
    bodyBackground: 'black'
};

export const DynamicTitle = Template.bind({});
DynamicTitle.args ={};
