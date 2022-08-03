export const ACTION = {
  SET_KEYWORDS: 'set-keywords',
  ADD_KEYWORD: 'add-keyword',
  REMOVE_KEYWORD: 'remove-keyword',
  SET_CLAIMS: 'set-claims',
  SET_STATUS: 'set-status',
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
      console.log(action.payload);
      return {
        ...state,
        claims: action.payload,
      };
    case ACTION.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      throw new Error();
  }
}

export const initialState = {
  keywords: [],
  results: [],
  claims: [],
  // status: STATUS.QUERYING,
};

export const STATUS = {
  QUERYING: 'querying',
  CLAIMS: 'done with query',
};
