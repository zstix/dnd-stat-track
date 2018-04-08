export default {

  next: () => state => {
    let turn = state.turn + 1;
    if (turn > state.characters.length - 1) {
      turn = 0;
    }
    return { turn };
  },

  sort: () => state => {
    const characters = [ ...state.characters ];
    characters.sort((a, b) => a.initiative < b.initiative);
    return { characters };
  }

};