import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';

describe('reducer', () => {
  it('Should reset to initial state on newGame action', () => {
    const initialState = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.floor(Math.random() * 100) + 1,
      showInfoModal: false
    }
    const currentState = {
      guesses: [5, 23, 27],
      feedback: 'Hot',
      correctAnswer: 74,
      showInfoModal: false
    }
    const action = newGame();
    const state = reducer(currentState, action);
    expect(state.guesses).toEqual(initialState.guesses);
    expect(state.feedback).toEqual(initialState.feedback);
    expect(state.showInfoModal).toEqual(initialState.showInfoModal);
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
  })

  it('Should submit guess return relevant feedback on makeGuess action')

  it('Should toggle showInfoModal on toggleInfoModal action')


})





const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false
};