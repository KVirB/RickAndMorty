import { getCharacters, getEpisodes } from "../API/axios";
import { getEpisodesThunk, setEpisodes } from "../reducer/episodesReducer";

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

export const getCharactersThunk = () => {
  return (dispatch) => {
    getCharacters().then((data) => {
      dispatch(setCharacters(data));
      data.results.forEach((result) => {
        dispatch(getEpisodesThunk(result.episode[0], result.id));
      });
    });
  };
};

export default charactersReducer;
