import "../../App.css";
import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { getCharactersThunk } from "../../reducer/charactersReducer";
import { getEpisodesThunk } from "../../reducer/episodesReducer";
import { ReactComponent as RickCharacters } from "../../pictures/rick-characters.svg";
// import { getCharacters } from "../../API/axios";

function Characters(props) {
  useEffect(() => {
    props.getCharactersThunk();
  }, []);

  return (
    <div className="characters">
      {console.log(props.episodes)}
      <RickCharacters className="rick_characters_picture"></RickCharacters>
      <div className="card_div">
        {props.characters.results !== undefined ? (
          props.characters.results.map((item) => {
            return (
              <div key={item.id} className="card">
                <div className="card_photo_characters_div">
                  <img
                    className="card_photo_characters"
                    src={item.image}
                    alt="photo_character"
                  ></img>
                  <div className="card_info">
                    <p className="card_name_character">{item.name}</p>
                    <div className="div_status">
                      <span
                        className={
                          item.status === "Alive"
                            ? "span_status_alive"
                            : item.status === "Dead"
                            ? "span_status_dead"
                            : "span_status_unknown"
                        }
                      ></span>
                      <p className="card_status_species">
                        {item.status} — {item.species}
                      </p>
                    </div>
                    <div>
                      <label>Last known location:</label>
                      <p>{item.location.name}</p>
                    </div>
                    <div>
                      <label>First seen in:</label>
                      {props.episodes.map((episode) => {
                        return episode.id === item.id ? (
                          <p>{episode.episode.name}</p>
                        ) : (
                          <></>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
}
let mapStateToProps = (state) => {
  return {
    characters: state.charactersPage.characters,
    episodes: state.episodesPage.episodes,
  };
};
export default connect(mapStateToProps, {
  getCharactersThunk,
  getEpisodesThunk,
})(Characters);
