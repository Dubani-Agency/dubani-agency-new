import React from "react";
import TitleStc from "./Title.stc";
function Title(props) {
  if (props.niveau == 1) {
    return (
      <TitleStc className={props.className}>
        <h1 className="mt-0 mt-md-4">
          <img
            src="/img/composant.png"
            className="imgComposant"
            alt="agence digitale Casablanca"
          />
          <span>{props.children} </span>
        </h1>
      </TitleStc>
    );
  } else if (props.niveau == 2) {
    return (
      <TitleStc className={props.className}>
        <h2>{props.children}</h2>
      </TitleStc>
    );
  } else if (props.niveau == 3) {
    return (
      <TitleStc className={props.className}>
        <h3>{props.children}</h3>
      </TitleStc>
    );
  } else if (props.niveau == 4) {
    return (
      <TitleStc>
        <h4>{props.children}</h4>
      </TitleStc>
    );
  } else if (props.niveau == 5) {
    return (
      <TitleStc className={props.className}>
        <h5>{props.children}</h5>
      </TitleStc>
    );
  } else {
    return (
      <TitleStc className={props.className}>
        <h6>
          <span className="trait"></span>
          <span>{props.children}</span>
        </h6>
      </TitleStc>
    );
  }
}

export default Title;
