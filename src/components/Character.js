import { h } from 'hyperapp';

import Stat from './Stat';

export default (props) => (
  <div class={'character ' + (props.active && 'active')}>

    <div class="info" style={{ 'background-color': props.color}}>
      <h2>{props.name}</h2>
      <div>{props.player}</div>
      <div>{props.race} - {props.characterClass}</div>
    </div>

    {['armorClass', 'healthPoints', 'initiative'].map((key, i) => (
      <Stat
        key={name+key+i}
        value={props[key]}
        up={() => props.update(key, parseInt(props[key], 10) + 1)}
        down={() => props.update(key, parseInt(props[key]) - 1)}
      />
    ))}

  </div>
);