import React from 'react';

function Keyboard (props) {
    let letter = props.letter
    let onClickButton = props.onClickButton
    let key = props.key
    let ind = props.ind
    let isClicked = props.isClicked
return (
    <button onClick = {() => onClickButton(ind)} disabled = {isClicked} key = {key}>{letter}</button>
);
   
}

export default Keyboard;