import { CATEGORY_FETCH_SUCCESS, CATEGORY_BY_ID_FETCH_SUCCESS} from "../actions/actionType";

const initialState = { categories: [], categoryById: {} };

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_FETCH_SUCCESS:
      return { ...state, categories: action.payload };

    case CATEGORY_BY_ID_FETCH_SUCCESS:
      return { ...state, categoryById: action.payload };

    default:
      return state;
  }
}

export default categoryReducer;
