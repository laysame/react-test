import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
library.add(faClock);

export default function FormattedDate(props) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let day = days[props.dt.getDay()];
  let month = months[props.dt.getMonth()];
  let date = props.dt.getDate();
  let hour = props.dt.getHours();
  let minutes = props.dt.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day} {month} {date} <FontAwesomeIcon icon="clock" /> {hour}:{minutes}
    </div>
  );
}
