const initialState = {
  Content: '',
  CurrentPage: 1,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_CONTENT':
      return { ...state, Content: payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, CurrentPage: payload };
    default:
      return state;
  }
};
