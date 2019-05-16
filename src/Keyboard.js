import React from 'react';
import PropTypes from 'prop-types'

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

Keyboard.propTypes = {
    letter: PropTypes.string.isRequired,
    onClickButton: PropTypes.func.isRequired,
    key: PropTypes.string.isRequired,
    isClicked: PropTypes.bool.isRequired,
  }

export default Keyboard;