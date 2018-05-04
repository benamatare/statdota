import React from 'react';
import TimeAgo from 'react-timeago';

export function getLastPlayedTime(last_played){
  let time = new Date(last_played * 1000).toString()
    return <TimeAgo date={time} />
}
