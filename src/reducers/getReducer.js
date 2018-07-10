import { FETCH_USER } from "../actions/getActions";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
}
