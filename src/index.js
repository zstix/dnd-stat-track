import { h, app } from 'hyperapp';

import state from './state';

const actions = {};

const view = (state, actions) => (
  <div>
    {state.characters.map(char => (
      <div>
        <b>{char.name}</b><br />
        <em>{char.race} {char.class}</em>
      </div>
    ))}
  </div>
);

app(state, actions, view, document.getElementById('app'));