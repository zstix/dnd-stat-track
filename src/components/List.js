import { h } from 'hyperapp';

import Character from './Character';

export default ({ characters, turn, update }) => (
  <div class="list">

    <div class="header">
      <div>Character</div>
      <div>Armor Class</div>
      <div>Health Points</div>
      <div>Initiative</div>
    </div>

    {characters.map((char, i) => (
      <Character
        key={char.name+i}
        {...char}
        active={turn === i}
        update={(key, value) => update({ index: i, key, value })}
      />
    ))}

    {!characters.length && (
      <div class="empty">Please Add a Character</div>
    )}

  </div>
);