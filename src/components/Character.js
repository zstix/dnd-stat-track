import { h } from 'hyperapp';

export default ({
  player,
  name,
  race,
  characterClass,
  color,
  initiative,
  armorClass,
  healthPoints
}) => (
  <div class="character">
    <b>{name} ({player})</b>
  </div>
);