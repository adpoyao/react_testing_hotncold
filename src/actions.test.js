import {NEW_GAME, newGame, MAKE_GUESS, makeGuess, TOGGLE_INFO_MODAL, toggleInfoModal} from './actions'

describe('newGame', () => {
  it('Should return the newGame action', () => {
    const action = newGame();
    expect(action.type).toEqual(NEW_GAME);
  })
})

describe('makeGuess', () => {
  it('Should create the makeGuess action', () => {
    const guess = 23;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  })
})

describe('toggleInfoModal', () => {
  it('Should return the toggleInfoModal action', () => {
    const action = toggleInfoModal();
    expect(action.type).toEqual(TOGGLE_INFO_MODAL);
  })
})