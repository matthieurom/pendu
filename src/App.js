import React from 'react';
import './App.css';
import Keyboard from './Keyboard.js'
import PropTypes from 'prop-types'

const DEFAULT_STATE = { win: false, isClickedArray: [], count: 0}

class App extends React.Component {

  state = {
    win: false,
    masque: 'JAUNE',
    isClickedArray: [],
    count: 0,

  }

  static propTypes = {
    win: PropTypes.bool.isRequired,
    masque: PropTypes.string.isRequired,
    isClickedArray: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired
  }

  getIsCliked (index) {
    const isClickedArray = this.state.isClickedArray

    if(isClickedArray.includes(index)) {
      return true
    }

    else {
      return false
    }
  }
// retourne true si la keyvalue est comprise dans le tableau isClickedArray


  handleClick = (a) => {
    const isClickedArray = this.state.isClickedArray
    const masque = this.state.masque
    const masqueSplit = masque.split(''); // permet de diviser la phrase ne liste de lettres

    this.setState(previousState => {
      return {
        isClickedArray: [...previousState.isClickedArray, a]
      }
    }, () => {
      //vérifie que chaque lettre est inclue dans isClickedArray et si c'est le cas retourne true et update win
      this.setState({win: masqueSplit.every( (e) => this.state.isClickedArray.includes(e))})
    });
    //ensuite on udpate le compteur
    this.setState( (state) => ({count: state.count + 1 }))
  }
  // La fonction handleclick rajoute la key value dans le tableau isClickedArray si le bouton 
  // correspondant est cliqué
  
  handleGame = () => {
    this.setState(DEFAULT_STATE)
    }

  render() {
    const masque = this.state.masque
    const isClickedArray = this.state.isClickedArray
    const win = this.state.win
    const count = this.state.count
    

   if(!win) {
     if(count<15) {
      return (

        <div className="App">
         <header>Jeu du pendu</header>
         <div className ="keyboard">
          {letters.map(({letter, key}) => ( 
          <Keyboard 
          letter = {letter}
          onClickButton = {this.handleClick}
          key = {key}
          ind = {key} 
          isClicked = {this.getIsCliked(key)}
          />
         ))}
          </div>
                
          <div className = 'masque'>
            <ComputeDisplay phrase = {masque} usedLetters = {isClickedArray}/>
          </div>
          <div className="compteur" >
          {count}
          </div>
        
          <div>
            <p>Essaie de devinez le mot en moins de <strong>15 tentatives !</strong></p>
           </div>
        </div>
        )
     }
     else {
      return(
        <div className ="rejouer">
               <h1> Perdu ... Essai encore</h1>
               <button onClick = {this.handleGame}>Rejouer ?</button>
        </div>
 
      )
     }

   }

   else {
     return(
       <div className ="rejouer">
              <h1> Gagné en <strong>{count}</strong> coup ! Bien joué</h1>
              <button onClick = {this.handleGame}>Rejouer ?</button>
       </div>

     )
   }
  }

}

function ComputeDisplay(props) {
  let phrase = props.phrase
  let usedLetters = props.usedLetters
  return phrase.replace(/\w/g,
    (letter) => (usedLetters.includes(letter) ? letter : '_')
  )
}
 

 
const letters = [
  {letter: 'A', key: 'A'},
  {letter: 'B', key: 'B'},
  {letter: 'C', key: 'C'},
  {letter: 'D', key: 'D'},
  {letter: 'E', key: 'E'},
  {letter: 'F', key: 'F'},
  {letter: 'G', key: 'G'},
  {letter: 'H', key: 'H'},
  {letter: 'I', key: 'I'},
  {letter: 'J', key: 'J'},
  {letter: 'K', key: 'K'},
  {letter: 'L', key: 'L'},
  {letter: 'M', key: 'M'},
  {letter: 'N', key: 'N'},
  {letter: 'O', key: 'O'},
  {letter: 'P', key: 'P'},
  {letter: 'Q', key: 'Q'},
  {letter: 'R', key: 'R'},
  {letter: 'S', key: 'S'},
  {letter: 'T', key: 'T'},
  {letter: 'U', key: 'U'},
  {letter: 'V', key: 'V'},
  {letter: 'W', key: 'W'},
  {letter: 'X', key: 'X'},
  {letter: 'Y', key: 'Y'},
  {letter: 'Z', key: 'Z'},
  ]


export default App;
