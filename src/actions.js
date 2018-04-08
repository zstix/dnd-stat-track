export default {

  next: () => state => {
    let turn = state.turn + 1;
    if (turn > state.characters.length - 1) turn = 0;
    return { turn };
  },

  sort: () => state => {
    const characters = [ ...state.characters ];
    characters.sort((a, b) => a.initiative < b.initiative);
    return { characters };
  },

  toggle: () => state => ({ showForm: !state.showForm }),

  create: () => ({ characters }) => {
    const inputs = document.querySelectorAll('.form input');

    if ([...inputs].some(input => input.value === '')) {
      alert('Please fill out form');
      return;
    }

    let character = {};
    inputs.forEach(input => {
      character[input.className] = input.value;
      input.value = '';
    });

    return {
      characters: [...characters, character],
      showForm: false
    };
  },

  update: ({ index, key, value }) => state => ({
    characters: state.characters.map((character, i) => {
      if (i === index) character[key] = value;
      return character;
    })
  })

};