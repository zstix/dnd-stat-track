import { h } from 'hyperapp';

export default ({ next, sort, toggle, cleanup, showForm }) => (
  <div class="controls">

    <button onclick={next}>Next Turn</button>
    <button onclick={sort}>Sort by Initiative</button>
    <button onclick={cleanup}>Clear Dead Characters</button>

    {!showForm && (
      <button onclick={toggle}>Add Character</button>
    )}
    
  </div>
);