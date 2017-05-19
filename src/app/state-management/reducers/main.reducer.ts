import {ActionReducer, Action} from "@ngrx/store";
import {State, intitialState} from "../state/main.state";
import {Actions} from "../actions/main.actions";

export const mainStoreReducer: ActionReducer<State> = (state = intitialState, action: Action) => {
  switch (action.type) {
    case Actions.SEND_MESSAGE: {
      state.arrayMessage.push(action.payload);
      return state;
    }
    case Actions.GET_MESSAGES: {
      return {
        arrayMessage: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
