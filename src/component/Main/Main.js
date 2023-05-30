import "../../App.css";
import React from "react";
import { ReactComponent as Ric } from "../../pictures/ric.svg";
import { ReactComponent as RicAndMortie } from "../../pictures/ric_and_mortie.svg";

function Main() {
  return (
    <div className="main">
      <RicAndMortie className="ric_and_mortie_picture"></RicAndMortie>
      <div className="main_text_span">Ric and Morty fun page</div>
      <Ric className="ric_picture"></Ric>
    </div>
  );
}

export default Main;
