import { h, app } from 'hyperapp';

import './styles/main.css';

import state from './state';
const actions = {};

import List from './components/List';

const view = (state, actions) => (
  <div>
    <div>Actions go here</div>
    <List {...state} />
    <div>Form Goes Here</div>
  </div>
);

app(state, actions, view, document.getElementById('app'));