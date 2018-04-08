import { h, app } from 'hyperapp';

const state = {
  count: 0,
};

const actions = {
  down: val => state => ({ count: state.count - val }),
  up: val => state => ({ count: state.count + val })
};

const view = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button>
  </div>
);

app(state, actions, view, document.getElementById('app'));