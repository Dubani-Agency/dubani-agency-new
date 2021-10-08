import React from "react";
import ChiffreStc from "./Chiffre.stc";

function Chiffre(props) {
  return (
    <ChiffreStc className="div1">
      <img src="/img/carreau.png" alt="chiffres agence digitale casablanca" />
      <span> {props.texte} </span>
    </ChiffreStc>
  );
}

export default Chiffre;
