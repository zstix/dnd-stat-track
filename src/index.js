import { h, app } from 'hyperapp';

import './styles/main.css';

import state from './state';
import actions from './actions';

import List from './components/List';
import Controls from './components/Controls';
import Form from './components/Form';

const view = (state, actions) => (
  <div>
    <Controls {...actions} showForm={state.showForm} />
    {state.showForm && <Form create={actions.create} />}
    <List {...state} />
  </div>
);

app(state, actions, view, document.getElementById('app'));