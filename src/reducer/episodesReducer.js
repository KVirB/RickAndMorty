import { getEpisodes } from "../API/axios";

const SET_EPISODES = "SET_EPISODES";

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
    default:
      return state;
  }
};

export const setEpisodes = (episodes, id) => ({
  type: SET_EPISODES,
  episodes: episodes,
  id: id,
});

export const getEpisodesThunk = (url, id) => {
  return (dispatch) => {
    getEpisodes(url).then((data) => {
      dispatch(setEpisodes(data, id));
    });
  };
};

export default episodesReducer;
