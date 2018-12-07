import React from 'react'
import Team from './Team'
import {connect} from 'react-redux';

const TeamList = ({ allTeams }) => {

  const renderedTeams = allTeams.map(team => {
    return <Team key={team.id} team={team} />
  })

  return (
    <div className="team-list">
      {renderedTeams}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allTeams: state.teams
  }
}

export default connect(mapStateToProps)(TeamList)
