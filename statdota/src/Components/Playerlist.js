import React from 'react';

  const Playerlist = (props) => {
    return(
          <div id={ props.player.account_id } onClick={ props.onClick }>
            <h1 id={ props.player.account_id }>Account Name: { props.player.personaname }</h1>
            <img src={ props.player.avatarfull } id={ props.player.account_id } alt="player_account_img"/>
            <p id={ props.player.account_id }>Last Played Match: {props.player.last_match_time}</p>
            ____________________________
         </div>
    )
  }

export default Playerlist;
