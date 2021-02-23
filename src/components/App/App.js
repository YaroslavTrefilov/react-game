import React from 'react';
import './App.scss';

import MainMenu from '../main-menu/main-menu';
import EnterName from '../enter-name/enter-name';
import GameArea from '../game-area/game-area';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.state = {
      pageName: 'MainMenu',
      partnerName: 'Хаяко',
      music:'',
      playerName: 'Player',
      gameBackground: '',
      gameTime:'00:00',
      gameScore: 0,
      currentQuestion: 0,
      currentMove: 0,
      isSoundOn:true
    };
  }

  changeState(key,value) {
    this.setState({[key]: value})
  }

  render() {
    const mainMenu = <MainMenu 
      onChangeState={this.changeState} />
    const enterName = <EnterName 
      onChangeState={this.changeState}/>
    const gameArea = <GameArea 
      onChangeState={this.changeState}
      {...this.state}/>

    let currentPage = mainMenu
    switch (this.state.pageName) {
      case 'MainMenu':
        currentPage = mainMenu;
        break;
      case 'GameArea':
        currentPage = gameArea;
        break;
      case 'EnterName':
        currentPage = enterName;
        break;
    
      default:
        break;
    }

    return (
      <div className="App">
        {currentPage}
      </div>
    );
  }
}

export default App;
