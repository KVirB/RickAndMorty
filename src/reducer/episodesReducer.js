import { getEpisodes } from "../API/axios";

const SET_EPISODES = "SET_EPISODES";
const CLEAR_EPISODES = "CLEAR_EPISODES";

let initialState = {
  episodes: [],
};

const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EPISODES:
      state.episodes.push({ id: action.id, episode: action.episodes });
      return {
        ...state,
        episodes: [...state.episodes],
      };
    case CLEAR_EPISODES:
      return {
        ...state,
        episodes: [],
      };
    default:
      return state;
  }
};

export const setEpisodes = (episodes, id) => ({
  type: SET_EPISODES,
  episodes: episodes,
  id: id,
});

export const clearEpisodes = () => ({
  type: CLEAR_EPISODES,
});

export const getEpisodesThunk = (url, id) => {
  return (dispatch) => {
    getEpisodes(url).then((data) => {
      dispatch(setEpisodes(data, id));
    });
  };
};

export default episodesReducer;
