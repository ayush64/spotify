import React from 'react';
import ReactDOM from'react-dom';
import App from './App';
import { DataLayer } from './DataLayer'
import { initialState } from './Reducer'
import { reducer } from './Reducer'

ReactDOM.render(
    <DataLayer initialState ={initialState} reducer = {reducer}>
<App />
</DataLayer>
, document.querySelector("#root"));