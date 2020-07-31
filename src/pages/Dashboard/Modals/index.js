import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/**
 * @summary Render React DOM to #modal dive element of document body(See /public/index.html)
 *          and Show it using [plainModal.js](https://anseki.github.io/jquery-plainmodal/)
 */
export default class Modals {
    /**
     *
     * @param {DOM} dom
     */
    static show(dom) {
        ReactDOM.render(<Provider store={window.store}> {dom} </Provider>, document.getElementById('modal'));
        const ele = window.$('#modal');
        ele.plainModal('open');
    }

    static close() {
        const ele = window.$('#modal');
        ele.plainModal('close');
    }
}
