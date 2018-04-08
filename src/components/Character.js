import { h } from 'hyperapp';

export default ({
  active,
  armorClass,
  characterClass,
  color,
  healthPoints,
  initiative,
  name,
  player,
  race
}) => (
  <div class={'character ' + (active && 'active')}>

    <div class="info" style={{ 'background-color': color}}>
      <h2>{name}</h2>
      <div>{player}</div>
      <div>{race} - {characterClass}</div>
    </div>

    <div class="armor">
      {armorClass}
    </div>

    <div class="health">
      {healthPoints}
    </div>

    <div class="init">
      {initiative}
    </div>

  </div>
);