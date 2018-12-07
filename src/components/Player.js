import React from 'react'
import {connect} from 'react-redux'

const Player = ({ player, selectPlayer }) => {
  return (
    <div onClick={() => selectPlayer(player)}>
      <p>{player.name}</p>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectPlayer: (player) => dispatch({
      type: "SELECT_PLAYER",
      payload: player
    })
  }
}

export default connect(null, mapDispatchToProps)(Player)
