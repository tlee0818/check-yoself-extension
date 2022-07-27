export const ACTION = {
  SET_KEYWORDS: 'set-keywords',
  ADD_KEYWORD: 'add-keyword',
  REMOVE_KEYWORD: 'remove-keyword',
  SET_CLAIMS: 'set-claims',
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTION.ADD_KEYWORD:
      return { ...state, keywords: [...state.keywords, action.payload] };
    case ACTION.SET_KEYWORDS:
      return { ...state, keywords: action.payload };
    case ACTION.REMOVE_KEYWORD:
      return {
        ...state,
        keywords: state.keywords.filter((value) => {
          return value != action.payload;
        }),
      };
    case ACTION.SET_CLAIMS:
      return {
        ...state,
        claims: action.payload,
      };
    default:
      throw new Error();
  }
}

export const initialState = {
  keywords: [],
  results: [],
  claims: [],
};
