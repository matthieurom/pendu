import React from 'react';
import './App.css';
import Keyboard from './Keyboard.js'

const DEFAULT_STATE = { win: false, isClickedArray: [], count: 0}

class App extends React.Component {

  state = {
    win: false,
    masque: this.initWord(),
    isClickedArray: [],
    count: 0,

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

  initWord () {
    const list = ['JAUNE', 'ROUGE', 'VERT','BLEU']
    
    return list[Math.floor(Math.random() * list.length)]
  }
// retourne true si la keyvalue est comprise dans le tableau isClickedArray


  handleClick = (a) => {
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
    this.setState({masque: this.initWord()})
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
          {letters.map((value) => ( 
          <Keyboard 
          letter = {value}
          onClickButton = {this.handleClick}
          key = {value}
          ind = {value} 
          isClicked = {this.getIsCliked(value)}
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
 

 
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default App;
