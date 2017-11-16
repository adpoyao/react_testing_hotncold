import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';

describe('reducer', () => {
  
  const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    showInfoModal: false
  }
  it('Should reset to initial state on newGame action', () => {
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

  it('Should submit guess return relevant feedback on makeGuess action', () => {
    const currentState = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: 15,
      showInfoModal: false
    }
    
    const guesses = [15, 19, 26, 46, 90, 'banana'];
    const feedbacks = ['You got it!', 'You\'re Hot!', 'You\'re Warm', 'You\'re Cold...', 'You\'re Ice Cold...', 'Please enter a valid number'];
    const actions = guesses.map(guess => {
        return reducer(currentState, makeGuess(guess));
    });
    for (let i = 0; i < guesses.length; i++) {
        expect(actions[i].feedback).toEqual(feedbacks[i]);
    }
  })

  it('Should save guesses in state.guesses array after makeGuess action', () => {
    const state = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: 15,
      showInfoModal: false
    }
    
    const guess1 = 1;
    const guess2 = 2;
    const guess3 = 3
    let action;
    action = reducer(state, makeGuess(guess1));
    action = reducer (action, makeGuess(guess2));
    action = reducer (action, makeGuess(guess3));    
    expect(action.guesses).toEqual([1,2,3]);
  })


  it('Should toggle showInfoModal on toggleInfoModal action', () => {
    const action = toggleInfoModal();
    const state = reducer(initialState, action);
    const newState = reducer(state, action);
    expect(state.showInfoModal).toEqual(!initialState.showInfoModal);
    expect(newState.showInfoModal).toEqual(!state.showInfoModal);
    
  })


})