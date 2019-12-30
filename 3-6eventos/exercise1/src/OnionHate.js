import React from "react";

const onChangeTextArea = function(event) {
  const eventTarget = event.target.value;
  if (eventTarget.includes("cebolla")) {
    return alert("Odio la cebolla");
  }
};

function OnionHate() {
  return <textarea onChange={onChangeTextArea}></textarea>;
}

export default OnionHate;
