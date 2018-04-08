import { h } from 'hyperapp';

import Character from './Character';

export default ({ characters, turn }) => (
  <div class="list">
    {characters.map(char => <Character {...char} />)}
  </div>
);