import { h } from 'hyperapp';

export default ({ value, up, down }) => (
  <div class={'stat ' + (value < 1 && 'dead')}>
    {value}
    <br />
    <button onclick={up}>+</button>
    <button onclick={down}>-</button>
  </div>
);