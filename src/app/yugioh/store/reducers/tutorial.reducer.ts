import { Action } from '@ngrx/store';
import * as TutorialActions from './../actions/tutorial.actions';
import {YugiohCard} from '../../model/yugioh-card';

// Section 1
// @ts-ignore
const initialState: YugiohCard = {
  id: '1',
  name: 'Card one'
};

// Section 2
export function reducer(state: YugiohCard[] = [initialState], action: TutorialActions.Actions) {

  // Section 3
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    default:
      return state;
  }
}
