import { h } from 'hyperapp';

import Character from './Character';

export default ({ characters, turn }) => (
  <div class="list">

    <div class="header">
      <div>Character</div>
      <div>Armor Class</div>
      <div>Health Points</div>
      <div>Initiative</div>
    </div>

    {characters.map((char, i) => (
      <Character
        {...char}
        active={turn === i}
      />
    ))}

  </div>
);