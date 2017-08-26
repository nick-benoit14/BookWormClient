import Constants from '../constants';

const initialState = {
  interactions: [],
  isFetching: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {

    case Constants.LIST_INTERACTIONS:
      return { ...state, isFetching: true };
    case Constants.LIST_INTERACTIONS_DONE:
      const defaultDone = () => ({ ...state, isFetching: false });
      if(action.error) {
        return { ...defaultDone(), error: action.error };
      }
      return { ...defaultDone(), interactions: action.payload };

    default:
      return state;
  }
};
