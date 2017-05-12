import {ActionReducer, Action} from "@ngrx/store";
import {State, intitialState} from "../state/main.state";
import {Actions} from "../actions/main.actions";

export const mainStoreReducer: ActionReducer<State> = (state = intitialState, action: Action) => {
  switch (action.type) {
    case Actions.INCREMENT: {
      let arrTemp = state.arrayMessage;
      arrTemp.push(action.payload['message']);
      return {
        arrayMessage: arrTemp
      }
    }
    default: {
      return state;
    }
  }
};
