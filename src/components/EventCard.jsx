import React from 'react'
import Card from './Card'

const EventCard = ({ event }) => {
    return (
        <Card>
            <h2>{event.title}</h2>
            <p>Start Date: {event.start_date} </p>
            <p>End Date: {event.end_date}</p>
            <p>Start Time: {event.start_time}</p>
            <p>End Time: {event.end_time}</p>
            <p>Location: {event.location}</p>
        </Card>
    );
};

export default EventCard;
