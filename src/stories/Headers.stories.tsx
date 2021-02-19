import React from "react";
import { store } from "../Global/store";
import { Provider } from 'react-redux';
import { withKnobs, text } from '@storybook/addon-knobs';
import Header from "../Components/Header/Header";

export default {
    title: "Header",
    component: Header,
    decorators: [withKnobs]
}

export const HeaderWithStaticTitle = () => {
    return <Provider store={store} ><Header /></Provider>
}

export const HeaderWithDefaultTitle = () => {
    return <Provider store={store} ><Header title="TaskBox"/></Provider>
}

export const HeaderWithDynamicTitle = () => {
    return <Provider store={store} ><Header title={text('Initial Value', "")} /></Provider>
}
