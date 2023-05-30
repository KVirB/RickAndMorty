import { getCharacters } from "../API/axios";

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
    });
  };
};

export default charactersReducer;
