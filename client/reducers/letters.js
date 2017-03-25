import { shuffle } from 'underscore';

import lettersData from '../data/letters';

function letters(state = [], action) {
  switch (action.type) {
    case 'CHANGE_SORT_BY':
      const sortedLetters = lettersData[action.letterCase];
      return action.sortBy === 'shuffle' ? shuffle(sortedLetters) : sortedLetters;
    default:
      return state;
  }
}

export default letters;
