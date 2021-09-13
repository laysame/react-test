import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons";
library.add( faClock, );

export default function FormattedDate(props){

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    let day = days[props.dt.getDay()];
    let month = months[props.dt.getMonth()];
    let date = props.dt.getDate();
    let hours = props.dt.getHours();
    let minutes = props.dt.getMinutes();
    if( hours < 10) {
    hours = `0${hours}`
    }
    if( minutes < 10) {
        minutes = `0${minutes}`
    }
    return (
        <div>
            {day} {month} {date} <FontAwesomeIcon icon="clock"/> {hours}:{minutes}
        </div>
    )
}