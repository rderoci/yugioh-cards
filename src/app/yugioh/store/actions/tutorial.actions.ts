// Section 1
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {YugiohCard} from '../../model/yugioh-card';

// Section 2
export const ADD_TUTORIAL       = '[Yugioh] Add'
export const REMOVE_TUTORIAL    = '[Yugioh] Remove'

// Section 3
export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL

  constructor(public payload: YugiohCard) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL

  constructor(public payload: number) {}
}

// Section 4
export type Actions = AddTutorial | RemoveTutorial;
