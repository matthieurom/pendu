import React from 'react';

function Keyboard (props) {
    let letter = this.props.letter
    let onClickButton = this.props.onClickButton
    let key = this.props.key
    let ind = this.props.ind
    let isClicked = this.props.isClicked
return (
    <button onClick = {() => onClickButton(ind)} disabled = {isClicked} key = {key}>{letter}</button>
);
   
}

export default Keyboard;