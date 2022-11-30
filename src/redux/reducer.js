import { symptoms } from '../data/searchData';

const AUTH_USER = "AUTH_USER";
const SEARCH_RESULT = 'SEARCH_RESULT';

const initialState = {
  search: [],
  user: {}
}


const searchResult = (query) => {
  let result = [];

  query !== '' ?
    result = symptoms.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    : result = symptoms

  return result;
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, user: { email: action.payload.email, token: action.payload.token } }
    case SEARCH_RESULT:
      return { ...state, search: searchResult(action.payload) }
    default:
      return state;
  }
}

export default rootReducer;