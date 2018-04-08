import { h, app } from 'hyperapp';

import './styles/main.css';

import state from './state';
import actions from './actions';

import List from './components/List';
import Controls from './components/Controls';

const view = (state, actions) => (
  <div>
    <Controls {...actions} />
    <List {...state} />
    <div>Form Goes Here</div>
  </div>
);

app(state, actions, view, document.getElementById('app'));