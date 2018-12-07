import React from 'react'
import './App.css'
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'


const App = ({selectedPlayer}) => {
  // state = {
  //   teams: gamesData.teams,
  //   selectedPlayer: null
  // }
  //
  // handleSelectPlayer = (player) => {
  //   this.setState({
  //     selectedPlayer: player
  //   })
  // }

  return (
    <div className="App">
      <NavHeader />
      <TeamList />
      {!selectedPlayer ? <div> Click Player for Details </div> :
        <PlayerDetails selectedPlayer={selectedPlayer}/>}
    </div>
  );
}


const mapStateToProps = state => {
  return {
      selectedPlayer: state.selectedPlayer
  }
}

export default connect(mapStateToProps)(App)












//
