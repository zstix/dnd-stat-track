import { h } from 'hyperapp';

export default ({ next, sort }) => (
  <div class="controls">

    <button onclick={next}>Next</button>

    <button onclick={sort}>Sort</button>

  </div>
);