import { h } from 'hyperapp';

export default ({ next, sort, toggle, showForm }) => (
  <div class="controls">

    <button onclick={next}>Next Turn</button>
    <button onclick={sort}>Sort by Initiative</button>

    {!showForm && (
      <button onclick={toggle}>Add Character</button>
    )}
    
  </div>
);