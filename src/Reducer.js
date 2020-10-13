export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  // token:
  //   "BQDUwquBkSX5vJvVtgsfYaI62HlVzwR0ba0p9ExIcQ1MzqjGS3pv6Nnm-PNTqkRESDfnyC7DUkgRTD4emSZfCszUnuWc_7HWj5FiZmO56_ACMkQtxgIH4TCfZpdAp-NNQtGUlgd5KNUyW_tWZ_JSiv_01iioo6zvi5ieik02n7eutmmwSzQH",
};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLISTS":
      return { ...state, playlists: action.playlists };
    case "SET_DISCOVER_WEEKLY":
      return { ...state, discover_weekly: action.discover_weekly };

    default:
      return state;
  }
};
