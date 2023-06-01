import { getCharacters } from "../API/axios";
import { getEpisodesThunk, clearEpisodes } from "../reducer/episodesReducer";

const SET_CHARACTERS = "SET_CHARACTERS";

let initialState = {
  characters: [],
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: { ...action.characters },
      };
    default:
      return state;
  }
};

export const setCharacters = (characters) => ({
  type: SET_CHARACTERS,
  characters: characters,
});

export const getCharactersThunk = (page) => {
  return (dispatch) => {
    getCharacters(page).then((data) => {
      dispatch(setCharacters(data));
      dispatch(clearEpisodes());
      data.results.forEach((result) => {
        dispatch(getEpisodesThunk(result.episode[0], result.id));
      });
    });
  };
};

export default charactersReducer;
