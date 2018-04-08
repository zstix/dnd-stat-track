import { h } from 'hyperapp';

export default ({ create }) => (
  <div class="form">
    <input type="text" class="name" placeholder="Character Name" />
    <input type="text" class="player" placeholder="Player Name" />
    <input type="text" class="color" placeholder="Color" />
    <input type="text" class="race" placeholder="Race" />
    <input type="text" class="characterClass" placeholder="Class" />
    <input type="text" class="armorClass" placeholder="Armor Class" />
    <input type="text" class="healthPoints" placeholder="Health Points" />
    <input type="text" class="initiative" placeholder="Initiative" />
    <br />
    <button onclick={create}>Create</button>
  </div>
);