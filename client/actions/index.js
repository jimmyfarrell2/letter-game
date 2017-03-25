export function toggleOptions() {
  return {
    type: 'TOGGLE_OPTIONS'
  };
};

export function changeLetter(letter) {
  return {
    type: 'CHANGE_LETTER',
    letter
  };
};

export function changeSortBy(sortBy, letterCase) {
  return {
    type: 'CHANGE_SORT_BY',
    sortBy,
    letterCase
  };
};

export function changeLetterCase(letterCase) {
  return {
    type: 'CHANGE_LETTER_CASE',
    letterCase
  };
};

export function changeLetterStyle(letterStyle) {
  return {
    type: 'CHANGE_LETTER_STYLE',
    letterStyle
  };
};

export function changeSoundStyle(soundStyle) {
  return {
    type: 'CHANGE_SOUND_STYLE',
    soundStyle
  };
};
